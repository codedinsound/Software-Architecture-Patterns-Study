import Tree from './Tree';

class BinarySearchTree implements Tree {
  insert(): void {
    console.log('Inserting a new item...');
  }
  delete(): void {
    console.log('Removing a given item');
  }
  traverse(): void {
    console.log('In-Order Traversal in O(N) a new Item');
  }
}

export default BinarySearchTree;
