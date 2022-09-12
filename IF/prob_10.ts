/*If10. The values of two integer variables A and B are given. If the values are not
equal then assign the sum of given values to each variable, otherwise assign
zero value to each variable. Output the new values of the variables A and B. */
let A : number  = 10;
let B : number = 11;
let sum : number = A + B;
if (A != B) {
    A = sum;
    B = sum;
} else { 
    A = 0;
    B = 0;
}
console.log(A , B);