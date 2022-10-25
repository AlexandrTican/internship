/*Array91. An array of N real numbers and two integers K and L (1 ≤ K < L ≤ N) are
given. Remove elements with the order numbers in the range K to L
inclusively from the array and output the size of the changed array and all its
elements. */

function spliceArray(arr:number[],K:number,L:number):number[]{
    arr.splice(K,L-K+1);
    return arr;
}
const arr : number[] = [1,2,3,4,5,6,7,8,9,10]
const K : number = 2;
const L : number = 8;
console.log(spliceArray(arr,K,L));
