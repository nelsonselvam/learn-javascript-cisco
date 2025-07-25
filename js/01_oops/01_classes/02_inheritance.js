/**
 *
 * Supported in EC6 for code reusability
 *
 *
 *
 */
class Vehicle {
  constructor({ latitude, longitude }) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  startingPoint() {
    console.log("1 City Plaza");
  }
}

class Bus extends Vehicle {
  constructor({ seats, id, latitude, longitude }) {
    super({ id, latitude, longitude });
    this.seats = seats;
  }
}

let passengerVehicle = new Bus({ seats: 32 });
passengerVehicle.startingPoint();
