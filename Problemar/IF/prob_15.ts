/*If15. Given three real numbers, output the sum of two largest values. */
let x : number = 25.15;
let y : number = 21.06156;
let z : number =9903031;

const x_is_bigger  = x > y && x > z; 
const y_is_bigger = y > x && y > z; 
const z_is_bigger = z > x && z > y;

let biggest : number  = 0;
let secondBiggest : number = 0;

//finds the first largest value
if(x_is_bigger){
    biggest = x;
}
if(y_is_bigger){
    biggest = y;
}
if(z_is_bigger){
    biggest = z;
}
//finds the second largest value
if (x_is_bigger &&  y > z ) {
    secondBiggest = y;
}else if (x_is_bigger && z > y){
    secondBiggest = z;
}

if (y_is_bigger && x > z){
    secondBiggest = x;
}else if(y_is_bigger && z > x) {
    secondBiggest = z;
}

if (z_is_bigger &&  x > y) {
    secondBiggest = x;
}else if(z_is_bigger && y > x){
    secondBiggest = y;
}
let sum : number = biggest + secondBiggest;

console.log("The largest number is " , biggest , " The second largest is " , secondBiggest);
console.log("\n Their sum is ", sum);