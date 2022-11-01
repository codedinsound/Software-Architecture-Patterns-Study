import AbstractFactory from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/AbstractFactory';
import Car from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/Car';
import PetrolFord from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/PetrolFord';
import PetrolToyota from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/PetrolToyota';

class PetrolCarFactory implements AbstractFactory {
  getCar(type: string): Car {
    if (type === 'FORD') return new PetrolFord();
    else if (type === 'TOYOTA') return new PetrolToyota();
    return null;
  }
}

export default PetrolCarFactory;
