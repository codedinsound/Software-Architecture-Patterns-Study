interface Tree {
  // design smell vioated the principle because of method bloating.
  // let's create "Fat Interfaces"
  insert(): void;
  delete(): void;
  traverse(): void;
  // methods related to balanced tree moved to Roation Tree
  // leftRotation(): void;
  // rightRotation(): void;
}

export default Tree;
