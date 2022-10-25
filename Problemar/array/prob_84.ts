// Array84. Given an array of N real numbers, perform the left cyclic shift of array
// elements on one position by assigning initial values of AN, AN−1, …, A2, A1 to
// elements AN−1, AN−2, …, A1, AN respectively. 

function leftShift(arr:number[]):number[]{
    let temp : number = arr[0];
    for(let i = 0; i < arr.length -1 ; i++){
        // x = arr[i-1]
        // arr[i]=arr[i-1];
        // arr[i-1] =x;
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    return arr;
}
const array1 : number[] = [1,2,3,4,5,6,7];
console.log(leftShift(array1));