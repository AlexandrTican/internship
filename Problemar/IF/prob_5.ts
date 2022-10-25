/*If5. Three integers are given. Find the amount of positive and amount of negative
integers in the input data. */
let a : number = 5;
let b : number = -20;
let c : number = -15;
let negative : number = 0;
let positive : number = 0;
if (a > 0) {
    positive++;
} else if ( a < 0){
    negative++;
}
if ( b > 0) {
    positive++;
} else if( b < 0){
    negative++;
}
if (c > 0) {
    positive++;
} else if ( b < 0) {
    negative++
}
console.log(" Positive numbers: ", positive , " \n Negative numbers : " , negative);
