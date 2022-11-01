import Car from '../../../Creational Design Patterns/Factory Pattern/Abstract Factory Pattern/Car';

interface AbstractFactory {
  getCar(type: string): Car;
}

export default AbstractFactory;
