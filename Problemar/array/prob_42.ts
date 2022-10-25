/*Array42. A real number R and an array of N real numbers are given. Find two
adjacent elements whose sum of values is the nearest to the number R and
output these elements in ascending order of its indices (see the definition of
two nearest numbers in Array40).an element AK such that the value |AK − R| is minimal)*/

function  nearSum(R : number , list:number[]):number[]{
    const sumArray :number[] = [];
    let sum : number = 0;
    for(const indexString in list) {
        const index = parseInt(indexString,10);
        sum = Math.abs((list[index] + list[index+1])-R);
        sumArray.push(sum);
    }
    //gets rid of NaN
    sumArray.splice(sumArray.length-1,1);
    
    let minSum :number = Number.MAX_SAFE_INTEGER;
    //finds minimal sum;
    for(const value of sumArray) {
        if(value < minSum){
            minSum = value;
        }
    };
    //finds indexes of minimal sum
    for (const value of sumArray){
        if(value === minSum){
            console.log("The indexes of values are :",sumArray.indexOf(value),sumArray.indexOf(value)+1);
                }
    }
    

    console.log("Minimal sum is", minSum);
    return sumArray;
}
const arr_test :number[] = [1 ,3 ,5 ,6, 7, 8, 9, 11];
let R2 : number = 10;
console.log("Initial array is.." , arr_test);
console.log(nearSum(R2,arr_test));