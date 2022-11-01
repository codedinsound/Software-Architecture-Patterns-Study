import { Vehicle } from '../Liskov Substitution Principle';

// Typical InHeritance
class PetrolCar extends Vehicle {
  constructor(type: string, age: number) {
    super(type, age);
  }

  // Override
  protected speedUp(): void {
    console.log('Car is speeding up...');
  }

  protected slowDown(): void {
    console.log('Car is slowing down...');
  }

  protected fuel(): void {
    console.log('Car fuel method....');
  }
}

export default PetrolCar;
