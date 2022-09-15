/*For20. An integer N (> 0) is given. Using one loop-statement compute the sum
1! + 2! + 3! + … + N!,
where N! (N–factorial) is the product of all integers in the range 1 to N:
N! = 1·2·…·N. To avoid the integer overflow, compute the sum using real
variables and output the result as a real number. */
let factorial : number = 6;
let result : number = 1; 
for ( let i = 0 ; i < factorial ; i++){
    i++
     factorial = factorial * i;
     console.log(factorial);
}