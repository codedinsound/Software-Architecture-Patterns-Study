import Car from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/Car';

class ElectricToyota implements Car {
  assemble(): void {
    let msg = 'Assembling an electric toyota';
    console.log(this, msg);
  }
}

export default ElectricToyota;
