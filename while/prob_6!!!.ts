/*While6. Given an integer N (> 0), compute the double factorial of N:
N!! = N·(N−2)·(N−4)·…,
where the last factor equals 2 if N is an even number, and 1 otherwise. To
avoid the integer overflow, compute the double factorial using a real variable
and output the result as a real number. */
let N : number = 4;
let i : number = 0;
let temp : number = 1;
/*
while (i < N){
    N = i;
    if(N === 0 || N === 1){
        console.log('N!! = 1')
    }
     N = N * (N-2);
    console.log(" Double factorial is ", N);
i++
}*/
while ( N > 1) {
    console.log(temp *= N);
    console.log(N = N-2);
}
console.log(temp);
/* n= 9;
n!! = 9 * (9-2) * (9-4) * (9-6) * (9 -8) 
n!! = 9 * 7 * 5 * 3 * 1 ;
temp = 9;
N = 9;
N - 2= 7
temp  = 9 * 7 = 63;
N = 7
N- 2 = 5;
temp = 63 * 5;
N = 5;
*/