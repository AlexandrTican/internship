    interface Dog {
    name: string,
    age: number,
    // breed: string[],
    hasTail: boolean,
    //methods => returns something..
    barkTo: () => void,
    runTo: (distance: number, place: string) => void,
    eatSomething: (food: string) => boolean,
    takeAShit: (shit: string) => number,   
}
//WE MUST ADD SAME SHIT TO CLASS AS IN INTERFACE!
//implement methodss done above!!!
class Bulldog implements Dog {
    name: string;
    //type is automatically inferred based on  Iattribution), anribuire)
    age = 0;
    // breed: ["Bulldog"];
    hasTail = false;
    //CONSTRUCTOR
    constructor(anyName: string){
        this.name = anyName; //use ;
    }
    //implementing methods 
    barkTo () {
        if(this.age <= 1) {
            console.log(`${this.name} woof woof`);
        } else { 
            console.log(`${this.name} url url`);
        }
    }
    runTo(distance: number, place: string){
        for(let i = 0 ; i <= distance; i++) {
            console.log(`${this.name} is running ${i} meters`);
            // if(i === distance) {
            //     console.log (`${this.name} `)
            // }
        }
        console.log(`${this.name} arrived at ${place}`);
    }
    eatSomething(food: string):boolean  {
        if(this.age < 3 ) {
            console.log(`${this.name} eating food `);
            return true;
        }  
        return false;

    }
    takeAShit(shit:string) {
        //using a private method
        return this.shitType(shit)
    }
    private shitType(shit: string,) {
        if (shit === 'small') { 
            console.log(`Easy to clean`);
            return 10;
        } else if ( shit === 'medium' ) {
            console.log(`A bit harder to clean`);
            return 200;
        } else if (shit === 'big') {
            console.log(`I'm looking for lopata`);
            return 1000;
        }  else {
            console.log(`wtf is this`);
            return -1;
        }
    }
}

class Mops implements Dog {
    name : string;
    age = 0;
    // breed: ["Mops"];
    hasTail = true;

    constructor(anyName: string,anyAge :number ) {
        this.name = anyName;
        this.age = anyAge;
    }
    barkTo () {
        console.log(`${this.name} is choking`)
    }
    runTo (distance : number,place : string) {
        if(distance > 10 ) {
            console.log(`${this.name} cannot get to ${place}`);
        } else{ 
            for(let i = 0; i < distance; i++) {
            console.log(`${this.name} is running ${distance} meters `);   
        } 
        }
        console.log(`${this.name}run to ${place}`);
    }
    eatSomething(food: string): boolean{
        if(food==='corm'){
            console.log(`${this.name} is eating ${food}`);
            return true;
        }
        console.log(`${this.name} is not eating ${food}`);
        return false;
    }
    takeAShit(shit:string){
        if(shit === 'small'){
            console.log('Easy to clean');
            return 10;
        } 
        console.log(`Not my dog`);
        return -1;
    }
}   

const myBulldog = new Bulldog('Max');
console.log(myBulldog);
myBulldog.barkTo();
myBulldog.takeAShit('big');
myBulldog.runTo(20,'office');
myBulldog.eatSomething('om');   