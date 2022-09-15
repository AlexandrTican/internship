/*For8. Given two integers A and B (A < B), find the product of all integers in the
range A to B inclusive.*/
let A : number = 29;
let B : number = 10;
let dif : number = A - B;
for ( let i = 0; i < dif; i++){
    A--;
    A*=A;
    console.log(A);
}