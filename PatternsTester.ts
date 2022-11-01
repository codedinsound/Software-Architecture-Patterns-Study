import {
  AIInterviewQuestion,
  AlgorithmsInterviewQuestions,
  InterviewQuestionProcessor,
} from './Open Closed Principle';

import {
  Pair,
  ViolationChecker,
  InputProcessor,
  Operation,
} from './Single Responsibility Principle';

import { Vehicle } from './Liskov Substitution Principle';

import {
  Tree,
  BalancedTree,
  BinarySearchTree,
} from './Interface Segregation Principle';
import RotationTree from './Interface Segregation Principle/RotationTree';

import {
  DatabaseController,
  MySQLDatabase,
  OracleDatabase,
} from './Dependency Inversion Principle';

export default class PatternTester {
  // MARK: Single Responsibility Priciple
  public static singleTontTest() {
    const pair: Pair = InputProcessor.process();

    // check wheter the inputs are fine or not.
    if (!ViolationChecker.isValid(pair)) {
      console.log('One of the input is invalid...');
      return;
    }

    let firstInteger = parseInt(pair.getFirst.valueOf());
    let secondInteger = parseInt(pair.getSecond.valueOf());

    let result = Operation.execute(firstInteger, secondInteger);

    console.log('Testing Single Responsibility Principle: ', result);
  }

  // MARK: Open / Closed Principle
  public static openClosedPrincipleTesting(): void {
    InterviewQuestionProcessor.process(new AlgorithmsInterviewQuestions());
    InterviewQuestionProcessor.process(new AIInterviewQuestion());
  }

  // MARK: Liskov Substitution Principle
  public static liskovTesting() {
    let v = new Vehicle('Ford', 6);
  }

  // MARK: Interface Segregation Principle
  public static interfaceSegregationTest() {
    const tree: Tree = new BinarySearchTree();

    tree.insert();
    tree.delete();
    tree.traverse();

    const tree2: RotationTree = new BalancedTree();

    tree2.insert();
    tree2.delete();
    tree2.traverse();
    tree2.leftRotation();
    tree2.rightRotation();
  }

  // MARK: Dependency Inversion Principle
  // [5]: https://stackblitz.com/edit/typescript-fmudqe?file=Dependency%20Inversion%20Principle%2Findex.ts,PatternsTester.ts,Dependency%20Inversion%20Principle%2FNotes.txt
  public static dependencyInversionTest() {
    // let controller = new DatabaseController(new MySQLDatabase());
    let controller = new DatabaseController(new OracleDatabase());

    controller.connect();
    controller.disconnect();
  }
}
