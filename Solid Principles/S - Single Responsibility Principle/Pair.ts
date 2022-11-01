class Pair {
  private first: string;
  private second: string;

  constructor(first: string, second: string) {
    this.first = first;
    this.second = second;
  }

  get getFirst() {
    return this.first;
  }

  get getSecond() {
    return this.second;
  }
}

export default Pair;
