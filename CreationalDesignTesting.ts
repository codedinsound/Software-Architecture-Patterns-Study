import { DatabaseConnector } from './Creational Design Patterns';
import BuilderPerson from './Creational Design Patterns/Builder Pattern/BuilderPerson';
import Animal from './Creational Design Patterns/Factory Pattern/Single Factory/Animal';
import AnimalFactory from './Creational Design Patterns/Factory Pattern/Single Factory/AnimalFactory';
import AnimalType from './Creational Design Patterns/Factory Pattern/Single Factory/AnimalType';
import { Shape, Square } from './Creational Design Patterns/Prototype Pattern';

class CreationalDesignTesting {
  // --------------------------------------------------------------------------------
  // MARK: Singleton Pattern
  // --------------------------------------------------------------------------------
  static singletonTesting() {
    // DatabaseConnector.getInstance().connect();
    // DatabaseConnector.getInstance().disconnect();

    const o1 = DatabaseConnector.getInstance();
    const o2 = DatabaseConnector.getInstance();

    if (o1 === o2) console.log('The Objects are the same');
  }

  // --------------------------------------------------------------------------------
  // MARK: Factory Pattern
  // --------------------------------------------------------------------------------
  static factoryTesting(): void {
    const animal: Animal = AnimalFactory.getAnimal(AnimalType.TIGER);
    animal.eat();
  }

  // --------------------------------------------------------------------------------
  // MARK: Builder Pattern
  // --------------------------------------------------------------------------------
  // Can Build as many parameters as we want
  static builderPatternTesting(): void {
    let person: BuilderPerson = new BuilderPerson.Builder(
      'Kevin',
      'kevin@gmail.com'
    ).build();

    console.log(person);
  }

  // --------------------------------------------------------------------------------
  // MARK: Prototype Pattern
  // --------------------------------------------------------------------------------
  static prototypePatternTesting(): void {
    const square: Shape = new Square(10, 5);
    square.draw();

    const squareClone: Shape = square.cloneObject();
    squareClone.draw();
  }
}

export default CreationalDesignTesting;
