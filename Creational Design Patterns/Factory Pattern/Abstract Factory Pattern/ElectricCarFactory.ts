import AbstractFactory from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/AbstractFactory';
import Car from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/Car';
import ElectricFord from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/ElectricFord';
import ElectricToyota from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/ElectricToyota';

class ElectricCarFactory implements AbstractFactory {
  getCar(type: string): Car {
    if (type === 'FORD') return new ElectricFord();
    else if (type === 'TOYOTA') return new ElectricToyota();
    return null;
  }
}

export default ElectricCarFactory;
