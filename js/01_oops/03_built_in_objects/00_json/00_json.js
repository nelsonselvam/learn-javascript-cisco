let vehicle2 = {
  id: "AK12113",
  longitude: 59.358615,
  latitude: 17.947589,
  getId: function () {
    return this.id;
  },
};
let vehicle2JSON = JSON.stringify(vehicle2);
console.log(typeof vehicle2JSON); // -> string
console.log(vehicle2JSON); // -> {"id":"AK12113","longitude":59.358615,"latitude":17.947589}

// JSON for Arrays

let Vehicle = function (id, latitude, longitude) {
  this.id = id;
  this.latitude = latitude;
  this.longitude = longitude;
};
let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];
ids.forEach((id) => vehicles.push(new Vehicle(id, 59.358615, 17.947589)));
let vehcilesJSON = JSON.stringify(vehicles); // -> [{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]
console.log(vehcilesJSON);

/**
 * First and foremost, it must describe either a single object or a single array at the highest level.

Secondly, each property name in an object (each key) must be enclosed in double quotes.
 * 
 */
// converting from JSON format
let vehicleJSON =
  '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);
console.log(typeof vehicle); // -> object
console.log(vehicle.position.longitude); // -> 59.358615
