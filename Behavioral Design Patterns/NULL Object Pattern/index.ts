/*
NULL Object Pattern 
-------------------------

  - references (objects) in Java may be null - which means empty objects essentially (we can not do any operations).

  - it can be complicated to deal with null references to avoid NullPointerException - if-else statements and try-catch blocks 

  - Good programming practice to avoid NULL references (for example return an empty ArrayList instead of null etc.);

                                    RealCustomer 
                                    getCustomer(); 
                             /
                            /
            ABSTRACT CLASS  
               isNull()   \
             getCustomer() \
                               NullCustomer 
                              getCustomer() 
*/
class Database3 {
  protected customerName: string[];

  constructor() {
    this.customerName = [];
    this.customerName.push('Adam');
    this.customerName.push('Joe');
    this.customerName.push('Michael');
    this.customerName.push('Daniel');
    this.customerName.push('Ana');
  }

  public exist(name: string) {
    let exists = false;
    this.customerName.forEach((customer) => {
      if (customer === name) exists = true;
    });
    return exists;
  }
}

abstract class AbstractCustomer {
  protected customerName: string;
  public abstract isNull(): boolean;
  public abstract get(): string;
}

class NullCustomer extends AbstractCustomer {
  public isNull(): boolean {
    return true;
  }
  public get(): string {
    return 'The customer does not exist...';
  }
}

class RealCustomer extends AbstractCustomer {
  declare customerName: string;

  constructor(customerName: string) {
    super();
    this.customerName = customerName;
  }

  public isNull(): boolean {
    return false;
  }
  public get(): string {
    return this.customerName;
  }
}

class CustomerFactory {
  private databaase: Database3;

  constructor() {
    this.databaase = new Database3();
  }

  public getCustomer(name: string): AbstractCustomer {
    if (this.customerExists(name)) return new RealCustomer(name);
    return new NullCustomer();
  }

  private customerExists(name: string): boolean {
    if (this.databaase.exist(name)) return true;
    return false;
  }
}

class NullTester {
  static testNullPattern() {
    const factory = new CustomerFactory();
    console.log(factory.getCustomer('Adam').get());
    console.log(factory.getCustomer('Ada4m').get());
  }
}

export default NullTester;
