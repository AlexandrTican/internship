/*Array70. Given an array of N real numbers (N is an even number), exchange values
of the first half and the second half of its elements. */

function splitHalf(arr:number[]):number[]{
    for(let i = 0 ; i < (arr.length/2); i++){
    // console.log(arr[i] = arr[i] + arr[(arr.length/2) + i]);
    // console.log(arr[(arr.length/2) + i] = arr[i] - arr[(arr.length/2) + i]);
    // console.log(arr[i] = arr[i] - arr[(arr.length/2) + i]);
    arr[i] = arr[i] + arr[(arr.length/2) + i];
    arr[(arr.length/2) + i] = arr[i] - arr[(arr.length/2) + i];
    arr[i] = arr[i] - arr[(arr.length/2) + i];
    }

    return arr;
}
const array : number[] = [1,2,3,4,5,6,7,8,9,10];
console.log(splitHalf(array));
//first loop
//  arr[0] = 1; arr.length/2 = 5; 
// arr[0===1] = arr[0===1] + arr[5+i===6]
//