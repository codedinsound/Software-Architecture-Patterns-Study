import Car from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/Car';

class ElectricFord implements Car {
  assemble(): void {
    let msg = 'Assembling an electric ford';
    console.log(this, msg);
  }
}

export default ElectricFord;
