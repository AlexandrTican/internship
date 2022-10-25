/*While21. An integer N (> 0) is given. Determine whether its decimal representation
contains odd digits or not, and output True or False respectively. Use the
operators of integer division and taking the remainder after integer division. */
let N : number = 15;
let remainder : number = 0;
while(N!=0){
    N = N / 10;
    console.log(N);
    remainder = N % 10;
}
if(remainder === 1){
    console.log("True - it contains odd digits")
}else{
    console.log("False - it does not contain odd digits")
}
console.log(remainder);
