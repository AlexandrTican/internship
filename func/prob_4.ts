/*Func4. Write a real-valued function RingS(R1, R2) that returns the area of a ring
bounded by a concentric circles of radiuses R1 and R2 (R1 and R2 are real
numbers, R1 > R2). Using this function, find the areas of three rings with given
outer and inner radiuses. Note that the area of a circle of radius R can be found
by formula S = π·R2. Use 3.14 for a value of π. */
function RingS(R1 : number , R2 : number){
    let area1 : number = 3.14 * Math.pow(R1,2);
    let area2 : number = 3.14 * Math.pow(R2,2);
    let area : number = area1 + area2;
    return area;
}
let innerRadius : number  = 4;
let outerRadius : number = 3;
console.log(RingS(innerRadius,outerRadius));