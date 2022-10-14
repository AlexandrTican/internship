//stack
class SNode<T> {
    private _data :T;
    private _next :SNode<T> | null

    constructor(data: T, next: SNode<T> | null) {
        this._data = data;
        this._next = next;
    }
    public get data(): T {
        return this._data;
    }

    public set data(value:T) {
        this._data = value;
    }

    public get next() : SNode<T> | null {
        return this._next;
    }
    public set next(value: SNode<T> | null) {
        this._next = value;    
    }
}

class Stack<T> {
    private _head: SNode<T> | null;
    private _size: number;
    constructor() {
        this._head = null;
        this._size = 0;
    }
    
    public push(data: T):void {
        let newNode = new SNode(data,null);
        if(this._head === null) {
            this._head = newNode;
        } else { 
            newNode.next = this._head;
            this._head = newNode;
        }
        this._size++;
    }
    
    public pop():T | null { 
        if(this._head === null) return null;
        let temp = this._head;
        this._head = temp.next;
        this._size--;
        return temp.data;
    }    
    get size():number { 
        return this._size;
    }
}
const numberStack = new Stack<number>();
numberStack.push(1); // Nodes [1] -> Head 1
numberStack.push(2); // Nodes [2, 1] -> Head 2
numberStack.push(3); // Nodes [3, 2, 1] -> Head 3
numberStack.push(4); // Nodes [4, 3, 2, 1] -> Head 4
numberStack.push(5); // Nodes [5, 4, 3, 2, 1] -> Head 5
console.table(numberStack);

numberStack.pop(); // Nodes [4, 3, 2, 1] -> Head 4
// Output 5
numberStack.pop(); // Nodes [3, 2, 1] -> Head 3
console.log(numberStack);
console.table(numberStack);
