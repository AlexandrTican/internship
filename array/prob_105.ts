// Array105. An array of N real numbers and two integers K and M (1 ≤ K ≤ N,
//     1 ≤ M ≤ 10) are given. Insert M new elements with zero value after an element
//     with the order number K. 

function insertGarbage(arr:number[], K:number, M:number):number[] {
 
    for ( let i = 0; i < arr.length; i++){
        if(arr[i]===K){
            while( M > 0){
                arr.splice(i,0,0);
                M--
            }
        }
    }
    return arr;
}

const N : number[] = [1,2,3,4,5,6,7,8,9,10]
let M : number = 3;
let K : number = 5;
console.log(insertGarbage(N,K,M));