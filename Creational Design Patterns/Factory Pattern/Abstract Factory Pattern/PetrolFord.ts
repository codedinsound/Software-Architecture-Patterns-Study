import Car from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/Car';

class PetrolFord implements Car {
  assemble(): void {
    let msg = 'Assembling an petrol ford';
    console.log(this, msg);
  }
}

export default PetrolFord;
