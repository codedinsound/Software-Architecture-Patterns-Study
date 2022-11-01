import Pair from './Pair';

class ViolationChecker {
  public static isValid(pair: Pair) {
    const first: string = pair.getFirst;
    const second: string = pair.getSecond;

    // Simulate Throw Error
    let error: any;

    try {
      if (isNaN(parseInt(first))) throw new Error('Something bad happened');
    } catch {
      return false;
    }

    try {
      if (isNaN(parseInt(second))) throw new Error('Something bad happened');
    } catch {
      return false;
    }

    return true;
  }
}

export default ViolationChecker;
