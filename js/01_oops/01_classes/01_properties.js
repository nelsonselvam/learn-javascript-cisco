class Vehicle {
  status = "unavailable"; // class body property declaration
  #longitude; // private fields preceeded by #
  #latitude;
  constructor({ id, latitude, longitude }) {
    // constructor property declaration
    this.id = id;
    this.setPosition({ latitude, longitude });
  }
  setPosition({ latitude, longitude }) {
    this.time = Date.now();
    this.#longitude = longitude;
    this.#latitude = latitude;
  }
  getPosition() {
    return {
      latitude: this.#latitude,
      longitude: this.#longitude,
    };
  }
}
let vehicle = new Vehicle({
  longitude: 18.213423,
  latitude: 59.367628,
  id: "AL1024",
});
console.log(vehicle.getPosition());
//console.log(vehicle.#longitude); // error


/**
 * 
 * use of standard get and set methods
 * 
 */

class VehicleLocation { 
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.position = {latitude, longitude}; 
        this.status = "unavailable"; 
    };
    set position({latitude, longitude}) { 
        this.time = Date.now(); 
        this.longitude = longitude; 
        this.latitude = latitude; 
    };
    get position() { 
        return { 
            latitude: this.latitude, 
            longitude: this.longitude 
        }; 
    };
};
let car = new VehicleLocation({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.position = {longitude: 18.193121, latitude: 59.378654};
console.log(vehicle.position);
