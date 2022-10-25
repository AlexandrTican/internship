/*Array63. Two arrays A and B of 5 real numbers are given. Values of elements of
each array are in ascending order. Write all elements of A and B to a new
array C (of size 10) so that values of all elements of C were in ascending order*/

function ascArray(A:number[],B:number[]):number[]{
    const C : number[] = A.concat(B);    
    C.sort();
    
    return C;
}
// function BubbleSort(list:number[]){
//     for( let i = 0 ; i <list.length;i++){
//         for ( let j = 0; i < (list.length -i -1);j++){
//             if(list[j] > list[j+1]){
//                 var temp = list[j];
//                 list[j] = list[j+1];
//                 list[j+1]= temp
//             }
//         }
//     }

// const A = Array.from({length:5}, (_,index)=>index++)
const A = Array.from([5,6,7,8,9]);
const B = Array.from({length:5},(_,index)=>index++);
// console.log(A);
// const B = Array.from([5,6,7,8,9]);
console.log(ascArray(A,B));
// const B = Array.from([10,20,30,40,50],(x)=>x+5);
//  console.log(B);