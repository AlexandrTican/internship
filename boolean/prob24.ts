/*Boolean24. Three real numbers A, B, C are given (A is not equal to 0). By means of
a discriminant D = B^2− 4·A·C, verify the following proposition:
 ―The quadratic equation A·x^2+ B·x + C = 0 has real roots. */
 
 //the D should be >= 0 , basically;

 let a : number = 6;
 let b : number = 9;
 let c : number = 2;
 let d : number = Math.pow(b,2) - 4 * a * c ;
 console.log(d >= 0);