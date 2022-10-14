// class QNode { 
//     constructor( public   value : number,
//         public  previous : QNode | null,
//         public   next : QNode | null) {}
// }

// interface QueueInterface { 
//      length: number;

//      firstNode : QNode | null;
//      lastNode : QNode | null;

//      firstValue : number | null;
//      lastValue:  number | null;

//     enqueue(value:number):void;
//     dequeue():number;

//     toArray():number[];
   
// }

// class Queue implements QueueInterface { 
//     length: number = 0;

//     firstNode = null;
//     lastNode = null;

//     firstValue = 0;
//     lastValue = 0;
//     constructor(){
//         this.firstNode = null;
//         this.lastNode = null;
//         this.length = 0;
//     }
//     enqueue(value:number){
//         let newNode = new QNode();
//         if(!this.firstNode) {
//             this.firstNode = newNode;
//             this
//         }
//     }
// }

class QNode {
    public data : number;
    public next: QNode | null;
    constructor(value:number) {
        this.data = value;
        this.next = null;
    }
}

 class myQueue { 
    public head: QNode | null;
    public tail: QNode | null;
    public count: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    public size():number {
        return this.count
    }
    public isEmpty():boolean{
        return this.count === 0;
    }
    public enqueue(value:number) { 

        //creating a new node 
        var node = new QNode(value);
        if(this.head === null) {
            this.head = node;
        }
        else { 
            //add node at end using tail
            this.tail!.next = node;
        }
        this.count++
        this.tail = node;
    }
    public dequeue(){
        if(this.head === null) {
            console.log("Empty queue")
            return -1;
        }
        var temp = this.head;
        this.head = this.head.next;
        this.count--
        if(this.head === null) {
            this.tail = null;
        }
        return temp.data;
    }
    public peek() { 
        if (this.head === null) {
            console.log("Empty Queue");
            return -1;
        }
        return this.head.data
    }

 }

 let newQueue = new myQueue();
 newQueue.enqueue(1);
 newQueue.enqueue(2);
 newQueue.enqueue(3);
 newQueue.dequeue()
 newQueue.peek()
 console.table(newQueue);