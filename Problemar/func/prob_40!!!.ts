/*Func40. Write a real-valued function Exp1(x, ε) (x and ε are real numbers, ε > 0) that
returns an approximate value of the function exp(x) defined as follows:
exp(x) = 1 + x + x^2/(2!) + x^3/(3!) + … + x^n/(n!) + …(n! = 1·2·…·n). Stop adding new terms to the sum 
when the value of the next
term will be less than ε. Using this function, find the approximate values of the
function exp(x) at a given point x for six given ε*/

// function factorial ( n : number): number{
//     if( n <=1)
//         return n;
//     else
//         return(n*factorial(n-1));
// }
// function expx1( x: number , n : number):number{
    
//     return x+Math.pow(x,n) / factorial(n);
// }
function exp(x :number, epsilon : number){
// let sum : number = 0;
// let temp : number =0; 
// for ( let i = 1; i <= epsilon; i++){
//     temp = Math.pow(x,i) / factorial(i);
//     sum += Math.pow(x,i) / factorial(i);
//     console.log(sum);
// }
// return sum;
//     let n : number = 2;
//     let temp : number = 1;
//     while (temp <= epsilon){
//         temp += expx1(x,n)
//         n++;
//     }
//     return temp;
    let xP: number = 1;
    let f : number = 1;
    let sum : number = 1;
    let prevSum: number = 0;
    let counter : number = 1;
    while(sum-prevSum > epsilon){
        xP *=x; 
        f *=counter;
        
        prevSum = sum;
        sum += xP / f;

        counter++;
    }
    return sum;
 }
let a : number = 5;
let b : number = 0.001;
const res = exp(a,b);
const m = Math.exp(a);

console.log(a,b);
console.log(res);
console.log(m);
console.log(Math.abs(m - res));