/*For32. An integer N (> 0) is given. A sequence of real numbers AK is defined as:
A0 = 1, AK = (AK−1 + 1)/K, K = 1, 2, … .
Output terms A1, A2, …, AN of the sequence.*/
let N : number = 10;
let A : number = 1;
let counter : number = 0;

for (let i = 0; i < N ; i++){
    counter++
    A = A + 1 / counter;
    console.log(A);
}