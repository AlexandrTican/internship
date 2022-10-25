/*For40. Integers A and B (A < B) are given. Output all integers in the range A to B,
with the number A being output once, the number A + 1 being output twice,
and so on. */
    
let A : number = 3;
let B : number = 9;

for(let i = A; i < B; i++){
    if(i < B && i > A){
    for(let j = 0; j < i; j++){
        console.log(i)
    }
    }
}