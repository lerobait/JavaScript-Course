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

const car1 = new Car({
  brand: 'Dodge',
  model: 'Durango'
});
const car2 = new Car({
  brand: 'Jeep',
  model: 'Grand Cherokee'
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
