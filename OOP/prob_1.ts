// Create a linked list node class
// The class constructor can be called only with value
// new Node(2);
// Or with value and the next node new Node(2, new Node(3))
// Using this class you should create a class LinkedList (https://en.wikipedia.org/wiki/Linked_list)
// The class will implement the next interface

// class Node {
  
//     constructor(
//       public readonly value: number,
//       public readonly nextNode?: Node
//     ) {}
  
//   }
  
//   interface List {
//     readonly firstNode: Node | null;
//     readonly lastNode: Node | null;
  
//     push(value: number): void;
//     pop(): void;
  
//     toArray(): number[];
//   }

//   class LinkedList implements List { /* ur implementation */ }

// // example of use 
// const list: List = new LinkedList();
// list.toArray() // => []
// list.length // => 0
// list.firstNode // => null
// list.lastNode // => null

// list.push(10);
// list.toArray() // => [10]
// list.length // => 1
// list.firstNode // => Node { 1 }
// list.lastNode // => Node { 1 }

// list.push(3)
// list.toArray() // => [10, 3]
// list.length // => 2
// list.firstNode // => Node { 1 }
// list.lastNode // => Node { 3 }

// list.push(7)
// list.toArray() // => [10, 3, 7]
// list.length // => 3
// list.firstNode // => Node { 1 }
// list.lastNode // => Node { 7 }

// list.pop()
// list.toArray() // => [10, 3]
// list.length // => 2
// list.firstNode // => Node { 1 }
// list.lastNode // => Node { 3 }

class node {
    
    constructor (
        public readonly value : number ,
        public readonly nextNode? : node
    ) {}
}

interface list {
    readonly firstNode : Node | null;
    readonly lastNode : Node | null;

    push(value:number) : void;
    pop(): void;

    toArray() : number[]
}