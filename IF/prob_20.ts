/*If20. Three points A, B, C on the real axis are given. Determine whether B or C is
closer to A. Output the nearest point and its distance from A.*/
let A : number = 21789.2410;
let B : number = -99901.512;
let C : number = 52105;
//calculating individual distances , from point B to A and from point C to A;
let distanceB : number = Math.abs(B - A) ;
let distanceC : number = Math.abs(C - A);
console.log("Distance B is ", distanceB, " Distance C is ", distanceC);
let shortestDistance : number = 0; 
if(distanceB > distanceC){
    shortestDistance = distanceC;
} else{
    shortestDistance =distanceB;
}
console.log("The shortest distance is" , shortestDistance);
let nearestPoint = Math.trunc(shortestDistance);
console.log("The nearest point is " , nearestPoint);