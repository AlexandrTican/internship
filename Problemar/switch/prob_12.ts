/*Case12. Elements of a circle are numbered as: 1 — radius R, 2 — diameter D = 2·R,
3 — length L = 2·π·R of the circumference, 4 — area S = π·R^2. 
The order number of one element and its value (as a real number) are given. Output
values of other elements in the same order. Use 3.14 for a value of π. */   
let element : number = 4;
let value : number = 3.6601;
const Pi = 3.14;
switch(element){
    case 1: 
    let Radius : number = value;
    console.log("The radius is ",Radius);
    break;
    case 2:
        let Diameter : number = 2 * value;
        console.log("The diameter is ", Diameter);
        break;
    case 3:
        let Length : number = 2 * Pi * value;
        console.log("The length is ",Length);
        break;
    case 4:
        let Area : number = Pi * Math.pow(value,2);
        console.log("The Area is ", Area);
        break;
    default:
        console.log(" You entered the wrong value");

}