import Animal from '../../../Creational Design Patterns/Factory Pattern/Single Factory/Animal';

class Cat implements Animal {
  eat(): void {
    console.log('Cat is eating.....');
  }
}

export default Cat;
