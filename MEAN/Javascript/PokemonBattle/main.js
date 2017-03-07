var game = {
  players: [],
  addPlayer: name => {
    game.players.push(playerConstructor(name));
    var lastPlayer = game.players.length - 1;
    $("#players1").append(`<li class="player" list=1 place=${lastPlayer}>${name}</li>`);
    $("#players2").append(`<li class="player" list=2 place=${lastPlayer}>${name}</li>`);
    $("#players1 li").last().click(function(){
      if ($(this).attr("list") == 1){
        console.log("test1");
        if(game.player1 != -1)
          $(`#players1 li:eq[${game.players1}]`).css("background-color", "");
        game.player1 = $(this).attr("place");
        $(this).css("background-color", "light-blue");
        resetCards($("#player1Cards ul"), game.player1);
      }
      else{
        console.log(this);
        console.log($(this));
        if(game.player2 != -1)
          $("#players2").children()[game.players2].css("background-color", "");
        game.player2 = $(this).attr("place");
        $(this).css("background-color", "light-blue");
        resetCards($("#player2Cards ul"), game.player2);
      }
    });
  },
  player1: -1,
  player2: -1
};

function playerConstructor(name){
  var player = {};
  player.name = name;
  player.hand = [];
  player.addCard = card => {player.hand.push(card)};
  player.addRandomCard = () => {
    var id = Math.floor(Math.random() * 151) + 1;
    player.addCard(cardConstructor(id));
  };
  player.addRandomCard();
  return player;
}

function cardConstructor(id){
  var card = {};
  $.get(`http://pokeapi.co/api/v1/pokemon/${id}/`, function(data){
    card.imageURL = `http://pokeapi.co/api/v1/sprite/${id}/`;
    card.name = data.name;
    card.attack = data.attack;
    card.defense = data.defense;
    resetCards($("#player1Cards ul"), game.player1);
    resetCards($("#player2Cards ul"), game.player2);
  }, "json");
  return card;
}

$(document).ready(function(){
  $("#playerCreator input[type ='button']").click(() => {
    var textField = $("#playerCreator input[type = 'text']");
    game.addPlayer(textField.val());
    textField.val("");
  });
  $(".cardList input").click(function(){
    playerID = $(this).attr("list") == 1 ? game.player1 : game.player2;
    if (playerID != -1)
      game.players[playerID].addRandomCard();
  });
});


function fight(card1, card2){
  var card1Total = card1.attack - card2.defense;
  if (card1Total < 0)
    card1Total = 0;
  var card2Total = card2.attack - card1.defense;
  if (card2Total < 0)
    card2Total = 0;
  if (card1Total > card2Total)
    return 1;
  else if (card1Total < card2Total)
    return 2;
  return 0;
}

function resetCards(htmlList, playerID){
  htmlList.empty();
  cards = game.players[playerID].hand;
  for (var i = 0; i < cards.length; i++){
    let cardName = cards[i].name;
    htmlList.append(`<li class='card'>${cardName}</li>`);
  }
}

/*
Multiple players
Select player
One on each side of screen
Each gets a random Pokenomn card

*/
