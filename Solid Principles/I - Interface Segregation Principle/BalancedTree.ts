import RotationTree from '../Interface Segregation Principle/RotationTree';
import Tree from './Tree';

class BalancedTree implements RotationTree {
  insert(): void {
    console.log('Inserting a new item...');
  }
  delete(): void {
    console.log('Removing a given item');
  }
  traverse(): void {
    console.log('In-Order Traversal in O(N) a new Item');
  }
  leftRotation(): void {
    console.log('Left rotation...');
  }
  rightRotation(): void {
    console.log('Right rotation');
  }
}

export default BalancedTree;
