/*
TEMPLATE PATTERN 
-------------------------
- what is the motivation behind template pattern? 
- there are several operations and procedure in software engineering that are very similar to each other. 


        Football                Basketball 
        --------                --------
        initialize();           initialize(); 
        startGame();            startGame(); 
        finishGame();           finishGame(); 

- subclasses will override the specific steps and decide the concrete behaviours of the modules 

        Template Pattern <--------------------------------> Strategy Pattern 

    template pattern is based                            strategy pattern is based on composition 
    on inheritance usually

    it operates on class level                          + it operates on object level which means it is 
    which means it is static                              dynamic. (We can change behaviour at runtime)
                                                          Usually strategy pattern is more flexible!!!
*/
abstract class Algorithm {
  protected nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  protected abstract initiliaze(): void;
  protected abstract sorting(): void;
  protected abstract showResults(): void;

  protected swap(i: number, j: number) {
    const temp = this.nums[j];
    this.nums[i] = this.nums[j];
    this.nums[j] = temp;
  }

  // Template Pattern
  // NOTE: The subclasses can not override this method !!!
  public sort(): void {
    this.initiliaze();
    this.sorting();
    this.showResults();
  }
}

class SelectionSort2 extends Algorithm {
  constructor(nums: number[]) {
    super(nums);
  }

  protected initiliaze(): void {
    console.log('Initializing the selection sort algorithm');
  }
  protected sorting(): void {
    for (let i = 0; i < this.nums.length - 1; ++i) {
      let index = i;

      for (let j = i + 1; j < this.nums.length; ++i) {
        if (this.nums[j] > this.nums[index]) index = j;

        if (index != i) this.swap(i, index);
      }
    }
  }
  protected showResults(): void {
    for (let i = 0; i < this.nums.length; i++) console.log(this.nums[i] + ' ');
  }
}

class BubbleSort2 extends Algorithm {
  constructor(nums: number[]) {
    super(nums);
  }

  protected initiliaze(): void {
    console.log('Initializing the bubble sort algorithm');
  }
  protected sorting(): void {
    for (let i = 0; i < this.nums.length - 1; i++)
      for (let j = 0; j < this.nums.length - i - 1; j++)
        if (this.nums[j] > this.nums[j + 1]) this.swap(i, j);
  }
  protected showResults(): void {
    for (let i = 0; i < this.nums.length; i++) console.log(this.nums[i] + ' ');
  }
}

export { Algorithm, SelectionSort2, BubbleSort2 };
