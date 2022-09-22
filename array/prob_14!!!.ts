/*Array14. An array A of N real numbers is given. Output array elements with even
order numbers (in ascending order of indices) and then output array elements
with odd order numbers (in ascending order of indices too):
A2, A4, A6, …, A1, A3, A5, … .
Do not use conditional statements. */

function oddArray(list:number[]):void
{
    for(let i = 0 ; i < list.length; i+=2){
        console.log(list[i]);
    }
}

const K : number[] = [10 , 15, 20, 25, 30 , 35, 40, 45, 50];
console.log(oddArray(K));