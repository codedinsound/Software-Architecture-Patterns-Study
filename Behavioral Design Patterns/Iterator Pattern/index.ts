/*
ITERATOR PATTERN 

- we can access elements of a collection for example in sequential manner without any need to know about 
  the underlying representation 

- Essentially it is useful when we want to iterate through elements with different types (for example emails to friends and co-workers). 

- the iterator pattern decouples the algorithms form the containers without the need for the underlying representation. 

     standard one-dim data structure

     a binary search tree can guarantee O(logN) run times. 

     a hasmap can be utilized O(1) 

     We do not care how the data is being stored we just want to iterate through the items independant of the underlying rep.

     Problem is Iterators are Inhertentially Sequential by Default 

     // External Iteration is where we impoment Iterator internface 
     // Internal we use .stream() such as in Java. Way more efficient. Stream API Async 
*/

interface IteratorPattern {
  hasNext(): boolean;
  next(): any;
}

class NameIterator implements IteratorPattern {
  private names: string[];
  private index: number = 0;

  constructor(names: string[]) {
    this.names = names;
  }

  // You can implement your own iterators
  hasNext(): boolean {
    return this.index < this.names.length;
  }
  next() {
    if (this.hasNext()) return this.names[this.index++];
    return null;
  }
}

class NameRepository {
  private names: string[] = ['Adam', 'Ana', 'Kevin', 'Michael'];

  public getIterator(): IteratorPattern {
    return new NameIterator(this.names);
  }
}

export { IteratorPattern, NameIterator, NameRepository };
