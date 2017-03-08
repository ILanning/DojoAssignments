class VehicleConstructor
{
  constructor(name, wheelCount, passengerCount, speed){
    this.name = name;
    this.wheelCount = wheelCount;
    this.passengerCount = passengerCount;
    this.speed = speed;
    this._distanceTravelled = 0;
  }

  updateDistanceTravelled(){ this._distanceTravelled += this.speed; }
  makeNoise(){ console.log("Noise"); }
  move(){
    this.updateDistanceTravelled();
    this.makeNoise();
  }
  checkMiles(){ console.log(this._distanceTravelled) }


}

var bike = new VehicleConstructor("Bike", 2, 1, 10);
bike.makeNoise = function(){ console.log("Ring ring!") };

var sedan = new VehicleConstructor("Sedan", 4, 4, 30);
sedan.makeNoise = function(){ console.log("Honk honk!") };

var bus = new VehicleConstructor("Bus", 4, 20, 25);
bus.addPassengers = function(count){ this.passengerCount += count };
