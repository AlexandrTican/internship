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
    constructor() {}
}