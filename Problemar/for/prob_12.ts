/*For12. Given an integer N (> 0), find the value of a following product of N factors:
1.1 · 1.2 · 1.3 · … .*/
let factor : number = 9;
let result : number = 1;
for ( let i = 0; i < factor; i++){
    result += 0.1
    result *= result;
    console.log(result);
}
 