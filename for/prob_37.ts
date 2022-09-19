/*For37. Given an integer N (> 0), find the sum
1^1+ 2^2+ … + N^N.
To avoid the integer overflow, compute the sum using real variables and
output the result as a real number. */

let n : number = 5;
let sum : number = 0;

for(let i = 1; i <= n; i++){
    //console.log( "i = ",i);
    let produs : number = 1;
    for(let j = 0 ; j < i; j++){
        //console.log("j = " ,j);
        /*value = Math.pow(value,value);
        console.log(value)*/
        produs = produs * i;
    }
    sum +=produs;
}
console.log(sum);
//it works!!!!!!!!!!!!!!!!!!!!!!!!!!
