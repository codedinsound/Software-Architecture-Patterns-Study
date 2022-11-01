import Animal from '../../../Creational Design Patterns/Factory Pattern/Single Factory/Animal';

class Dog implements Animal {
  eat(): void {
    console.log('Dog is eating....');
  }
}

export default Dog;
