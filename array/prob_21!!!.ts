/*Array21. An array of N real numbers and two integers K and L (1 ≤ K ≤ L ≤ N) are
given. Find the average of array elements with the order numbers in the
range K to L inclusively. */

function avgRange(list:number[],x : number , y : number):number
{   let avg = 0;
    for(let i = x ; x < y ; i++)
    {   
        avg += list[i]    
    }
    avg = avg / (y - x);
    console.log(avg);
    return avg;
}

let K : number = 2;
let C : number = 5;
let N : number[] = [1 ,2 , 3, 4, 5, 6, 7, 8,];
console.log(avgRange(N,K,C));