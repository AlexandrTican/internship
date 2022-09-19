/*While12. An integer N (> 1) is given. Find the largest integer K such that the sum
1 + 2 + … + K is less than or equal to N. Output K and the corresponding sum. */

let N : number = 25;
let i : number = 0;
let sum : number = 0;

while( sum < N || sum === N){
    sum +=i;
    i++
}

console.log(i);
console.log(sum);