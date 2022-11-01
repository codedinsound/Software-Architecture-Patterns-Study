import Tree from './Tree';

// This is what prevents Bloating
interface RotationTree extends Tree {
  leftRotation(): void;
  rightRotation(): void;
}

export default RotationTree;
