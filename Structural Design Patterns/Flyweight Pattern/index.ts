/*
FLYWEIGHT PATTERN 
-------------------------
  - what is the motivation behind flyweight pattern? 
  - we would like to minimize memory usage by sharing as much data as possible with similar objects. 
  - for example in a document every single character share the same features - font metrics etc. 
  - we create a flyweight object and every single character refers to it. 


  ----------------                     
  |  --------     |
  |  |  4MB |     |
  |  --------     |
  | --------------|
  | |   6MB      ||\
  | |------------|| \
  |               |  \
  -----------------   \
  10 MB                \
    ----------------    \        
  |  --------     |
  |  |  4MB |     |
  |  --------     |
  | --------------| ------ 4MB
  | |   6MB      ||
  | |------------||         
  |               | 
  -----------------
  10 MB                   /
    ----------------     /       
  |  --------     |     /
  |  |  4MB |     |    /
  |  --------     |   /
  | --------------|  /
  | |   6MB      || / 
  | |------------||
  |               |
  -----------------
  10 MB 
  
  |  --------     |
  |  |  4MB |     |   
  |  --------     | /
  | --------------|/
  | |   6MB      ||
  | |------------||
  |               |
  -----------------
  10 MB 

    In game development 

    in a computer game there are a large number of similar objects 
    (bullet, enemy ships etc)

    WE DON'T WANT TO USE DIFFERENT OBJECTS WHEN DEALING WITH THE SAME PARTICLE 

    flyweight pattern is extremely useful

    "A flyweight is an object that minimizes memroy usage by sharing as much data as possible with other simlar objects"


    texture of the particles 
          (image)         -------------------------> there are features and parameters of objects that are the same 
    width and height 


    speed and position     ------------------------> there are parameters of objects that are unique 
      of the particles     ------------------------> these are called extrinsic state 

    
    - what will happen to the extrinsic states?

    - we store them in a data structures - usually a simple one-dimensional array data structure. 

    - the items will be delegated to the draw() method to paint the entities to the canvas. 
  
*/

interface Shape {
  draw(): void;
}

class Rectangle implements Shape {
  private x: number;
  private y: number;
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  public getX(): number {
    return this.x;
  }

  public setX(x: number): void {
    this.x = x;
  }

  public getY(): number {
    return this.y;
  }

  public setY(y: number): void {
    this.y = y;
  }

  draw(): void {
    console.log(
      'Drawing a rectangle ' + this.color + ' x=' + this.x + ' y=' + this.y
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class ShapeFactory {
  // we will create a rectangle for every color
  private shapes: Map<string, Shape>;

  constructor() {
    this.shapes = new Map<string, Shape>();
  }

  getShape(color: string): Shape {
    if (this.shapes.has(color)) return this.shapes.get(color);

    const shape: Shape = new Rectangle(color);
    this.shapes.set(color, shape);
    return shape;
  }
}

class TestFlyweightPattern {
  static test() {
    const colors: string[] = ['RED', 'GREEN', 'BLUE'];
    const shapeFactory: ShapeFactory = new ShapeFactory();

    for (let i = 0; i < 30; ++i) {
      let rectangle: Rectangle = shapeFactory.getShape(
        colors[getRandomInt(3)]
      ) as Rectangle;
      rectangle.setX(getRandomInt(50));
      rectangle.setY(getRandomInt(50));
      rectangle.draw();
    }
  }
}

export { TestFlyweightPattern };
