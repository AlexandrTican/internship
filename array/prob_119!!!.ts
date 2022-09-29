/*Array119. Given an array of N integers, increase each series of equal numbers of the
array by one element (see the series definition in Array116). */
// Series definiton : A group of successive array elements
// with equal values is called a series of equal numbers, the amount of its
// elements is called a length of series (a length of series may be equal to 1), the
// value of its elements is called a value of series. Create and output two new
// integer-valued arrays B and C containing respectively lengths and values of all
// series of equal numbers of the array A

// function equalInc(arr:number[]):number[]{
//     const result = arr.filter(x=> x===x )
//     return result;
// }

function equalInc(arr:number[]):number[]{
    const result:number[] = [];
    for ( let i = 0; i < arr.length ; i++){
        if(arr[i]=arr[i+1]){
            if(arr[i]!=arr[i+1]){
                result.push(arr[i]);
            }
        }
        // if(arr[i]!=arr[i+1]){
        //     continue;
        // }
    }
    // for(let i = 0); i < arr.length; i++{
    //     if[arr[i]]
    // })
    return result;
}
const N : number[] = [1,2,2,3,3,3,3,4,4,4,4];
console.log(equalInc(N));