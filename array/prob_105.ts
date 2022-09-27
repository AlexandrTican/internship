// Array105. An array of N real numbers and two integers K and M (1 ≤ K ≤ N,
//     1 ≤ M ≤ 10) are given. Insert M new elements with zero value after an element
//     with the order number K. 

function insertGarbage(arr:number[], K:number, M:number):number[] {
    for( let i = K; i <arr.length; i++){
        arr.splice(i,0,0)
    }

    return arr;
}