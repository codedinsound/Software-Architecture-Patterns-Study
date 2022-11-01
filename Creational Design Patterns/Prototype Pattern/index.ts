abstract class Shape {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public abstract draw(): void;
  public abstract cloneObject(): Shape;
}

class Square extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  public draw(): void {
    console.log(`Square with width: ${this.width} height: ${this.height}`);
  }
  public cloneObject(): Shape {
    return new Square(this.width, this.height);
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  public draw(): void {
    console.log(`Rectangle with width: ${this.width} height: ${this.height}`);
  }
  public cloneObject(): Shape {
    return new Rectangle(this.width, this.height);
  }
}

export { Shape, Square, Rectangle };
