/*Array49. An array of N integers is given. If the array is a permutation (i. e., if the
array contains all integers in the range 1 to N) then output 0, otherwise output
the order number of the first inadmissible element. */

function isPermutation(list:number[]):void{
    const permutation : number[] = [];
    for(let i =1 ; i <= list.length;i++){
        permutation.push(i);
    }
    console.log(permutation);
    for(let i =0 ; i< list.length;i++){
        if(list[i] != permutation[i]){
            console.log("The order number of inadmissible element is " ,i);
            return;
            }
    }
    return console.log(0);
}
const N : number[] = [1,2,3,4,2];
isPermutation(N);