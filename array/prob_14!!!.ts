/*Array14. An array A of N real numbers is given. Output array elements with even
order numbers (in ascending order of indices) and then output array elements
with odd order numbers (in ascending order of indices too):
A2, A4, A6, …, A1, A3, A5, … .
Do not use conditional statements. */

function oddArray(list:number[]):void
{
    for(let i = 0 ; (i < list.length-1); i++){
        console.log(list[i]);
    }
}

const x : number[] = [15 , 20, 25, 30, 50 , 55, 100, 200, 5000];
console.log(oddArray(x));