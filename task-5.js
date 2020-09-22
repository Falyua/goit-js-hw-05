class Car {
  static getSpecs({ maxSpeed, _price, speed, isOn, distance }) {
    console.log(`Max speed: ${maxSpeed},price: ${_price}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}`);
  }

  constructor({ maxSpeed = 0, price = 0, speed = 0, distance = 0 }) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = speed;
    this.isOn = false;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    let newSpeed = this.speed + value;
    if (newSpeed < this.maxSpeed) {
      this.speed = newSpeed;
    } else {
      this.speed = this.maxSpeed;
      console.log("Скорость выше максимальной");
    }
  }

  decelerate(value) {
    let newSpeed = this.speed - value;
    if (newSpeed >= 0) {
      this.speed = newSpeed;
    } else {
      console.log("Полная остановка");
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    } else {
      console.log("Готово!");
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);