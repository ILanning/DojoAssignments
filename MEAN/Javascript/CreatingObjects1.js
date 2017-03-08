function VehicleConstructor(name, wheelCount, passengerCount){
  var result = {};
  result.name = name;
  result.wheelCount = wheelCount;
  result.passengerCount = passengerCount;
  result.makeNoise = function(){ console.log("Noise"); };
  return result;
}

var bike = VehicleConstructor("Bike", 2, 1);
bike.makeNoise = function(){ console.log("Ring ring!") };

var sedan = VehicleConstructor("Sedan", 4, 4);
sedan.makeNoise = function(){ console.log("Honk honk!") };

var bus = VehicleConstructor("Bus", 4, 20);
bus.addPassengers = function(count){ this.passengerCount += count };
