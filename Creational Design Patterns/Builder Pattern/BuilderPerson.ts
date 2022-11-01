// In the previous lecture we have seen how to construct a Person object with the help of the builder pattern. In this exercise you have to construct the Student class in the exact same manner.

// There are 2 compulsory variables (that the Student must specify):

// String name
// String university
// There is a single variable that is optional (no need to specify):

// int age
// Let's use the builder pattern to construct the Student class!

// Good luck!

class BuilderPerson {
  private name: string;
  private email: string;
  private address: string;
  private age: number;

  // Suppose we another paremeter
  private university: string;

  public static Builder = class {
    private readonly name: string;
    private readonly email: string;
    private address: string;
    private age: number;
    private university: string;

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }

    public setAddress(address: string) {
      this.address = address;
      return this;
    }

    public setAge(age: number) {
      this.age = age;
      return this;
    }

    public setUniversity(university: string) {
      this.university = university;
      return this;
    }

    public build(): BuilderPerson {
      return new BuilderPerson(this);
    }
  };

  constructor(builder) {
    this.name = builder.name;
    this.email = builder.email;
    this.address = builder.address;
    this.age = builder.age;
  }
}

export default BuilderPerson;
