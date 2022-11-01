import { Vehicle } from '../Liskov Substitution Principle';

class ElectricCar extends Vehicle {
  constructor(type: string, age: number) {
    super(type, age);
  }

  // Override
  protected speedUp(): void {
    console.log('Electric car is speeding up...');
  }

  protected slowDown(): void {
    console.log('Electric car is slowing down...');
  }

  protected fuel(): void {
    throw new Error('Electric cars can not be fueld....');
  }
}

export default ElectricCar;
