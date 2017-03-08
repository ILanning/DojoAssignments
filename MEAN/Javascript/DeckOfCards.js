const readline = require("readline");
const r1 = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

//Deck functions

function Deck(){
  this.cards = [];
  this.generate();
};

Deck.prototype.shuffle = function(){
  for(var i = 0; i < this.cards.length; i++){
    let swapIndex = Math.floor(Math.random() * (this.cards.length - i)) + i;
    let temp = this.cards[swapIndex];
    this.cards[swapIndex] = this.cards[i];
    this.cards[i] = temp;
  }
};

Deck.prototype.generate = function(){
  this.cards = [];
  for (let i = 51; i > -1; i--){
    this.cards[i] = i;
  }
  this.shuffle();
};

Deck.prototype.deal = function(){
  return this.cards.pop();
};

Deck.prototype.print = function(){
  let result = "[";
  for (let i = 0; i < this.cards.length-1; i++)
    result += `${this.cards[i]}, `
  result += `${this.cards[this.cards.length-1]}]\nLength = ${this.cards.length}`
  console.log(result);
}


//Card functions

function evalCard(card){
  card = card % 13;
  if (card === 0 || card > 10)
    return 10;
  else
    return card;
};

function nameCard(card){
  let result = "";
  let kind = card % 13;
  let group = card / 13;

  if (kind === 1)
    result += "Ace";
  else if (kind === 0)
    result += "King";
  else if (kind === 11)
    result += "Queen";
  else if (kind === 12)
    result += "Jack";
  else if (kind > 1)
    result += kind.toString();

  if (group >= 3)
    result += " of Hearts";
  else if (group >= 2)
    result += " of Clubs";
  else if (group >= 1)
    result += " of Spades";
  else if (group >= 0)
    result += " of Diamonds";

  return result;
};

function renderCard(card){
  let faceVal = card % 13;
  if (faceVal === 0)
    faceVal = " K";
  else if (faceVal === 1)
    faceVal = " A";
  else if (faceVal === 11)
    faceVal = " Q";
  else if (faceVal === 12)
    faceVal = " J";
  else if (faceVal > 1 && faceVal < 10)
    faceVal = " " + faceVal;

  let corner = card / 13;
  let color = null;
  if(corner >= 3){
    corner = "♥";
    color = "\x1b[31m";
  }
  else if (corner >= 2){
    corner = "♣";
    color = "\x1b[37m";
  }
  else if (corner >= 1){
    corner = "♠";
    color = "\x1b[37m";
  }
  else if (corner >= 0){
    corner = "♦";
    color = "\x1b[31m";
  }

  return [
    "┌────┐",
    `│${color}${corner}\x1b[0m  ${color}${corner}\x1b[0m│`,
    `│ ${color}${faceVal}\x1b[0m │`,
    `│${color}${corner}\x1b[0m  ${color}${corner}\x1b[0m│`,
    "└────┘"
  ];

}


//Player functions

function Player(name){
  this.name = name;
  this.hand = [];
};

Player.prototype.add = function(card){
  this.hand.push(card);
};

Player.prototype.discard = function(){
  let temp = this.hand[this.hand.length];
};

Player.prototype.evalHand = function(){
  let result = 0;
  for (let i = 0; i < this.hand.length; i++)
    result += evalCard(this.hand[i]);
  return result;
};

/*Player.prototype.declareHand = function(){
  for (let i = 0; i < this.hand.length; i++)
    console.log(`${this.name} Card #${i+1}: ${nameCard(this.hand[i])}`);
};*/


Player.prototype.declareHand = function(){
  result = ["", "", "", "", ""];
  for (let i = 0; i < this.hand.length; i++){
    card = renderCard(this.hand[i]);
    result[0] += card[0];
    result[1] += card[1];
    result[2] += card[2];
    result[3] += card[3];
    result[4] += card[4];
  }
  console.log(`${result[0]}\n${result[1]}\n${result[2]}\n${result[3]}\n${result[4]}`);
};

Player.prototype.clearHand = function(){
  this.hand = [];
}

/*
  Blackjack structure:
    -Ask if they want to play
      -If no, close
      -If yes, deal both player and dealer two cards
        -Ask if they'd like to continue
          -If no, compare player total to dealer total
            -If dealer > player but less than 22 player loses, otherwise player wins
          -If yes, deal both player and dealer a card
            -If player goes over 21 they lose immediately
*/
var gameStates = {
  "Start" : 0,
  "Midgame" : 1,
  "Replay" : 2
};
var gameState = gameStates["Replay"];
var player = new Player("Player");
var dealer = new Player("Dealer");
var deck = new Deck();
var wins = 0;
var losses = 0;

console.log("Would you like to play a game of Blackjack?");

r1.on("line", function(line){
  line = line.trim().toLowerCase();
  switch (gameState){
    case gameStates["Replay"]:
    {
      if (line === "y" || line === "yes"){
        deck.generate();
        player.clearHand();
        dealer.clearHand();

        player.add(deck.deal());
        player.add(deck.deal());
        console.log(" -- Your hand --")
        player.declareHand();

        dealer.add(deck.deal());
        console.log(" -- Dealer's hand --")
        dealer.declareHand();
        while (dealer.evalHand() < 17){
          dealer.add(deck.deal());
        }

        console.log(`\nCurrent hand value: ${player.evalHand()}`);
        console.log("Draw new card?");
        gameState = gameStates["Midgame"];
      }
      else if (line === "n" || line === "no"){
        if(wins !== 0 && losses !== 0)
          console.log("Thanks for playing!");
        r1.close();
      }
      else{
        console.log("Sorry, that input wasn't recognised.");
      }
    }
      break;
    case gameStates["Midgame"]:
    {
      if (line === "y" || line === "yes"){
        let card = deck.deal();
        player.add(card);
        console.log(`\n New card: ${nameCard(card)}`);
        console.log(`\nCurrent hand value: ${player.evalHand()}`);
        if(player.evalHand() > 21){
          console.log(`Sorry, you've gone bust.\n -- Your final hand --`);
          player.declareHand();
          console.log(`  Total value: ${player.evalHand()}`);
          losses++;
          console.log(`\nCurrent tally: ${losses} losses, ${wins} wins.\nWant to play again?`)
          gameState = gameStates["Replay"];
        }
        else{
          console.log("Draw new card?");
        }
      }
      else if (line === "n" || line === "no"){
        dealerValue = dealer.evalHand();
        playerValue = player.evalHand();
        if (playerValue > dealerValue || dealerValue > 21){
          console.log("Congratulations, you won!\n -- Your final hand --");
          player.declareHand();
          console.log(`  Total value: ${playerValue}`);
          console.log(" -- Dealer's final hand --")
          dealer.declareHand();
          console.log(`  Total value: ${dealerValue}`);
          wins++;
          console.log(`\nCurrent tally: ${losses} losses, ${wins} wins.\nWant to play again?`)
        }
        else {
          console.log(`Sorry, the dealer had a better hand.\n -- Your final hand --`);
          player.declareHand();
          console.log(`  Total value: ${playerValue}`);
          console.log(" -- Dealer's final hand --")
          dealer.declareHand();
          console.log(`  Total value: ${dealerValue}`);
          losses++;
          console.log(`\nCurrent tally: ${losses} losses, ${wins} wins.\nWant to play again?`)
          gameState = gameStates["Replay"];
        }
        gameState = gameStates["Replay"];
      }
      else{
        console.log("Sorry, that input wasn't recognised.");
      }
    }
  }
});
