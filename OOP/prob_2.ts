class DoublyLinkedListNode {
    public value : any;
    public next: DoublyLinkedListNode | null;
    public prev: DoublyLinkedListNode | null;
}

class DoublyLinkedList {
    private head: DoublyLinkedListNode | null;
    private tail: DoublyLinkedListNode | null;

    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    public length() : number {
        return this.size
    }

    public isEmpty() : boolean {  
        return this.size <= 0;
    }
    public appendBack(value:any) { 
        if(this.isEmpty()) {
            let temp = new DoublyLinkedListNode();
            this.head = temp;
            this.tail = temp;
            this.size++;
            return;
        }
        else{
            let temp = new DoublyLinkedListNode;
            temp.next = null;
            temp.prev = this.tail;
            temp.value = value;

            this.tail.next =temp;
            this.tail = temp;
            this.size++
        }
    }

    public appendFirst(value:any) {
        if(this.isEmpty()) {
            let temp = new DoublyLinkedListNode();
            temp.value = value;
            this.head = temp;
            this.tail = temp;
            this.size++;
        }
        else {
            let temp = new DoublyLinkedListNode();
            temp.next = this.head;
            temp.prev = null;
            temp.value = value;

            this.head.prev = temp;

            this.head = temp;
            this.size++
        }
    }
    public removeFirst()
    {
        if(this.isEmpty())
        {
            return;
        }
        if(this.size == 1)
        {
            this.head = null;
            this.tail = null;
            this.size--;
 
        }
        else
        {
            this.head = this.head!.next;
            this.head!.prev = null;
            this.size--;
        }
    }
 
    public removeLast()
    {
        if(this.isEmpty())
        {
            return;
        }
        if(this.size == 1)
        {
            this.head = null;
            this.tail = null;
            this.size--;
            
        }
        else
        {
            this.tail = this.tail!.prev;
            this.tail!.next = null;
            this.size--;
        }
    }
 
    
}