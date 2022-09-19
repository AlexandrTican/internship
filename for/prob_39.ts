/*For39. Positive integers A and B (A < B) are given. Output all integers in the range A
to B, with an integer of a value K being output K times (for example, the
number 3 must be output 3 times)*/
let A : number = 3;
let B : number = 9;

for(let i = A; i < B; i++){
    if(i < B && i > A){
    console.log(i)
    }
}
    for(let j = A ; j < B; j++){
        if(j < B && j > A){
            console.log(j);
        }
    }
