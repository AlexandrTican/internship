/*For36. Given positive integers N and K, find the sum
1^K
+ 2^K+ … + N^K.
To avoid the integer overflow, compute the sum using real variables and
output the result as a real number. */
let N : number = 5;
let K : number = 10;
let sum : number = 0;

for(let i = 0; i < N; i++){
    i++
    for(let j = 0; j < K ; j++){
        j++
        sum +=Math.pow(i,j);
    }
}
console.log(sum);

