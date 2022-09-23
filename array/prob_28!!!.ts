/*Array28. Given an array A of N real numbers, find the minimum among elements
with even order numbers: A2, A4, A6, … .*/

function minEven(list:number[]):number
{   let min : number = 0;
    for(let i = 0 ; i < list.length ; i+=2){
        min = list[i]
        if(min < list[i]){
            min =list[i]
        };
    }
    return min;
}

let A : number[] = [10  ,  9 , 8 , 7 ,6 ,5 ,4 ,3 ,2, 1];
console.log(minEven(A));

