/*. Given an integer N (> 0), find the sum
1^N+ 2^N−1 + … + N^1.
To avoid the integer overflow, compute the sum using real variables and
output the result as a real number.*/

let n : number = 5;
let sum : number = 0;
let value : number = 0;
for( let i = 0; i < n; i++){
    value++
    //console.log(value)
    for (let j = 0; j < n; j++){
        sum += Math.pow(value,n--)
        console.log(sum);
    }
}