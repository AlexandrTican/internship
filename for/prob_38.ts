/*. Given an integer N (> 0), find the sum
1^N+ 2^N−1 + … + N^1.
To avoid the integer overflow, compute the sum using real variables and
output the result as a real number.*/

let n : number = 5;
let sum : number = 0;
let left : number = 0;
for( let i = 1; i < n; i++){
    left = 1;
    sum = sum + left;
    for (let j =1; j < n; j++){
            left =  Math.pow(left,n--)
       // sum = Math.pow(value,n--)
        //sum = value + 
    }
}
console.log(sum);