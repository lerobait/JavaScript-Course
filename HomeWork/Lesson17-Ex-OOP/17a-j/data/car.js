class Car {
  brand;
  model;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    console.log(
      `${this.brand} ${this.model}, Speed; ${this.speed} kh/m, Trunk: ${trunkStatus}`
    );
  }

  go() {
    if (!this.isTrunkOpen) {
      this.speed += 5;
    }
  
    if (this.speed > 200) {
      this.speed = 200;
    }
  }
  
  brake() {
    this.speed -= 5;
  
    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    } 
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
}

const car1 = new Car({
  brand: 'Dodge',
  model: 'Durango'
});
const car2 = new Car({
  brand: 'Jeep',
  model: 'Grand Cherokee'
});
const raceCar = new RaceCar({
  brand: 'Dodge',
  model: 'Challenger',
  acceleration: 20
});

console.log(car1);
console.log(car2);

car1.displayInfo();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();

car1.openTrunk();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();

car2.openTrunk();
car2.go();
car2.displayInfo();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();
