import AnimalType from '../../../Creational Design Patterns/Factory Pattern/Single Factory/AnimalType';
import Cat from '../../../Creational Design Patterns/Factory Pattern/Single Factory/Cat';
import Dog from '../../../Creational Design Patterns/Factory Pattern/Single Factory/Dog';
import Lion from '../../../Creational Design Patterns/Factory Pattern/Single Factory/Lion';
import Tiger from '../../../Creational Design Patterns/Factory Pattern/Single Factory/Tiger';

class AnimalFactory {
  public static getAnimal(type: AnimalType) {
    switch (type) {
      case AnimalType.CAT:
        return new Cat();
      case AnimalType.DOG:
        return new Dog();
      case AnimalType.LION:
        return new Lion();
      case AnimalType.TIGER:
        return new Tiger();
      default:
        return null;
    }
  }
}

export default AnimalFactory;
