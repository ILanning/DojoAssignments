function personConstructor(name){
  return {
    name : name,
    distance_travelled : 0,
    say_name : function(){ console.log(this.name); },
    say_something : function(text){ console.log( `${this.name} says \"` + text + '\"'); },
    walk : function(){
      console.log(this.name + " is walking");
      this.distance_travelled += 3;
    },
    run : function(){
      console.log(this.name + " is running");
      this.distance_travelled += 10;
    },
    crawl : function(){
      console.log(this.name + " is crawling");
      this.distance_travelled += 1;
    }
  }
}

function ninjaConstructor(name, cohort){
  return {
    name : name,
    cohort : cohort,
    beltLevel : "Yellow",
    levelUp : function(){
      if(this.beltLevel == "Yellow")
        this.beltLevel = "Red";
      else if(this.beltLevel == "Red")
        this.beltLevel = "Black";
      return this;
    }
  }
}

console.log(ninjaConstructor("test", "test2").levelUp());
