import Pair from './Pair';

class InputProcess {
  public static process(): Pair {
    let firstNumber: string, secondNumber: string;

    // Simulates Reading two numbers from user and chekcs if their numbers
    // and not long strings which can't converted to numbers.
    firstNumber = '200';
    secondNumber = '400';

    const pair: Pair = new Pair(firstNumber, secondNumber);

    return pair;
  }
}

export default InputProcess;
