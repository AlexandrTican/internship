/*While9. Given an integer N (> 1), find the smallest integer K such that the inequality
3^K> N is fulfilled. */
let N : number = 36512;
let K : number = 0;
let temp : number = 0;
while(Math.pow(3,K+1)< N){
    K++
    temp = Math.pow(3,K);
}
console.log(temp);
console.log(K);