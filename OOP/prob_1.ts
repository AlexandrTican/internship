class LinkedListNode {
    constructor(
        public value: number,
        public nextNode?: LinkedListNode | null
    ) {}
}
interface List {
    readonly firstNode: LinkedListNode | null;
    readonly lastNode: LinkedListNode | null;
    push(value : number): void;
    pop(): void;
    toArray(): number[];
    length: number
}
class LinkedList implements List{
    firstNode: LinkedListNode | null;
    lastNode: LinkedListNode | null;
    length = 0;
    constructor(
        firstNode: LinkedListNode | null,
        lastNode: LinkedListNode | null,
    ){
        this.firstNode = firstNode;
        this.lastNode = lastNode;
        this.length = 0;
    }
    push(value: number): void {
        const node = new LinkedListNode(value);
        if (this.length > 0){
            this.lastNode!.nextNode = node;
        }else{
            this.firstNode = node;
        }
        this.lastNode = node;
        this.length++;
    }
    pop(): void{
        if (this.length){
            let currentNode = this.firstNode;
            let secondToLastNode = this.firstNode;
        while (currentNode!.nextNode) {
              secondToLastNode = currentNode;
              currentNode = currentNode!.nextNode;
            }
            secondToLastNode!.nextNode = null;
            this.lastNode = secondToLastNode;
            this.length--;
        if (!this.length) {
            this.firstNode = null;
            this.lastNode= null;
      }
    }
    }
    toArray(): number[] {
        return [];
    }
}
// class LinkedList implements List { /* ur implementation */ }

// example of use 
const list: List = new LinkedList();
list.toArray() // => []
list.length // => 0
list.firstNode // => null
list.lastNode // => null

list.push(10);
list.toArray() // => [10]
list.length // => 1
list.firstNode // => Node { 1 }
list.lastNode // => Node { 1 }

list.push(3)
list.toArray() // => [10, 3]
list.length // => 2
list.firstNode // => Node { 1 }
list.lastNode // => Node { 3 }

list.push(7)
list.toArray() // => [10, 3, 7]
list.length // => 3
list.firstNode // => Node { 1 }
list.lastNode // => Node { 7 }

list.pop()
list.toArray() // => [10, 3]
list.length // => 2
list.firstNode // => Node { 1 }
list.lastNode // => Node { 3 }