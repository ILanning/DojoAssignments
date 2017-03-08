function Vehicle(name, wheelCount, passengerCount, speed){
  var _this = this;
  this.name = name;
  this.wheelCount = wheelCount;
  this.passengerCount = passengerCount;
  this.speed = speed;
  var distanceTravelled = 0;

  var updateDistanceTravelled = function(){
    distanceTravelled += _this.speed;
    return this;
  };
  this.move = function(){
    updateDistanceTravelled();
    this.makeNoise();
    return this;
  };
  this.checkMiles = function(){
    console.log(distanceTravelled)
    return this;
  };
  this.VIN = Math.floor(Math.random * 10000);
}


Vehicle.prototype.makeNoise = function(){ console.log("Noise"); };

var bike = new Vehicle("Bike", 2, 1, 10);
bike.makeNoise = function(){ console.log("Ring ring!") };

var sedan = new Vehicle("Sedan", 4, 4, 30);
sedan.makeNoise = function(){ console.log("Honk honk!") };

var bus = new Vehicle("Bus", 4, 20, 25);
bus.addPassengers = function(count){
  this.passengerCount += count
  return this;
};
