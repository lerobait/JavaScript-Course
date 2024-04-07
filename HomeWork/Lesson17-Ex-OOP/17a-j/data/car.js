class Car {
  brand;
  model;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}`);
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
car2.displayInfo();
