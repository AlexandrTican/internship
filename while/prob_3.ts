/*While3. Two positive integers N and K are given. Using addition and subtraction
only, find a quotient of the integer division N on K and also a remainder after
this division*/
let N : number = 13;
let K : number = 3;
let quotient : number = 0;
let remainder : number = 0;

while(N > K){
    console.log(N= N-K)
    quotient++
    console.log( "Catul", quotient);
    if(N < K){
        console.log("restul", remainder = N);
    }
}
console.log("The quotient is ", quotient);
console.log("The remainder is", remainder);