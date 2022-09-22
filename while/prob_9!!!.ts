/*While9. Given an integer N (> 1), find the smallest integer K such that the inequality
3^K> N is fulfilled. */
let N : number = 25;
let K : number = 0;
while(Math.pow(K,3) < N){
    K++
}
console.log(K);