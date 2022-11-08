/*
FACADE PATTERN 
-------------------------
 - we would like to deal with a complicated library or framework....
 - for example external libraries such as TensorFlow or SkLearn 
 - extremely useful when using APIs
 - we have to initiliaze the framework related classes and handle all the dependencies. 
 - the problem is that our classes may become tighltly coupled to the implementation of the framework or library. 
    


          APPLICATION <-----------------> FACADE <---------------------> Clustering | Deep Learning Frameworks | Neural 

          facade pattern provides a simple interface to the complicated framework or system 

          it has limited functionality but this is exactly the main advantage 

          It only provides the features the client needs. 
*/

interface Sorter {
  sort(): void;
}

class BubbleSort implements Sorter {
  sort(): void {
    console.log('Bubble Sort');
  }
}

class MergeSort implements Sorter {
  sort(): void {
    console.log('Merge Sort');
  }
}

class QuickSort implements Sorter {
  sort(): void {
    console.log('Quick Sort');
  }
}

// Facade
class SortingManager {
  private bubbleSort: Sorter;
  private quickSort: Sorter;
  private mergeSort: Sorter;

  constructor() {
    this.bubbleSort = new BubbleSort();
    this.quickSort = new QuickSort();
    this.mergeSort = new MergeSort();
  }

  public doBubbleSort(): void {
    this.bubbleSort.sort();
  }

  public doMergeSort(): void {
    this.mergeSort.sort();
  }

  public doQuickSort(): void {
    this.quickSort.sort();
  }
}

class TestFacadePattern {
  static test() {
    console.log('Facade Pattern');
    const manager: SortingManager = new SortingManager();
    manager.doMergeSort();
  }
}

export { TestFacadePattern };
