/*While30. Three positive real numbers A, B, C are given. A rectangle of size A × B
contains the greatest possible amount of squares with side C (without
overlaps). Find the amount of squares placed on the rectangle. Do not use the
operators of multiplication and division. */
let A : number = 3;
let B : number = 4;
let C : number = 5;
let rectangleSurface : number = A * B;
let squareSurface = Math.pow(C,2);
let counter = 0;

while(rectangleSurface != 0){
    rectangleSurface = rectangleSurface / squareSurface;
    counter++
}
console.log(counter);