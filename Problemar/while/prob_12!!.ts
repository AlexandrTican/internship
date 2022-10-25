/*While12. An integer N (> 1) is given. Find the largest integer K such that the sum
1 + 2 + … + K is less than or equal to N. Output K and the corresponding sum. */

let N : number = 36512;
let K : number = 0;
let sum : number = 0;

while( sum + K <= N){
    K++;
    sum +=K;
}


console.log(K);
console.log(sum);

function calcSum(num:number):number{
    let sum : number = 0;
    for(let i = 0; i <= num;i++){
        sum += i;
        
    }
    return sum;
}
console.log(calcSum(K)===sum);