/*While6. Given an integer N (> 0), compute the double factorial of N:
N!! = N·(N−2)·(N−4)·…,
where the last factor equals 2 if N is an even number, and 1 otherwise. To
avoid the integer overflow, compute the double factorial using a real variable
and output the result as a real number. */
let N : number = 3;
let i : number = 0;

while (i < N){
    N = i;
    if(N === 0 || N === 1){
        console.log('N!! = 1')
    }
     N = N * (N-2);
    console.log(" Double factorial is ", N);
i++
}
