/*Array56. An array A of N (≤ 15) integers is given. Write elements of A with order
numbers that are multiples of 3 (3, 6, …) to a new array B and output the size
of array B and all its elements. Do not use conditional statements.*/

function threeMultiple(list:number[]):void{
    const B : number[] =[];
    for(let i = 3 ; i < list.length ;i+=3){
        B.push(list[i]);
    }
    return console.log(B.length,'\n', B);
}
 const A : number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
 threeMultiple(A);
