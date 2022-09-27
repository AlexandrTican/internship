/*Array77. Given an array of N real numbers, replace each local minimum with its
square (an array element is called the local minimum if it is smaller than its
neighbors). */
function squareMin(arr:number[]):number[]{
    for( let i = 0; i < arr.length; i++){
        if ( i === 0 && arr[i] < arr[i+1]){
            arr[i] *= arr[i];
            continue;
        }
        if( i === (arr.length - 1) && arr[i] < arr[i-1] ){
            arr[i] *= arr[i];
            continue;
        }
        if(arr[i] < arr[i-1 ] && arr[i] < arr[i+1]){
            arr[i] *= arr[i];
        }
    }
    return arr;
}

const array : number[] = [2,8,4,5,6,2,4,3];
console.log(squareMin(array));