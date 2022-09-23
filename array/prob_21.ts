/*Array21. An array of N real numbers and two integers K and L (1 ≤ K ≤ L ≤ N) are
given. Find the average of array elements with the order numbers in the
range K to L inclusively. */

function avgRange(list:number[],K : number , L : number):number
{   let avg = 0;
   /* for(let i = K ; i <= L ; i++)
    {   
        avg += list[i]    
    }*/
    let i = K;
    // while ( i <= L) {
    //     avg += list[i];
    //     i++;
    // }
    // avg = avg / ((L - K)+1);
    // console.log(avg);
    // return avg;
    const chunk = list.slice(K,L+1);
    return chunk.reduce((acc,num)=>acc+=num,0)/((L-K)+1);   
}


let K : number = 2;
let C : number = 5;
let list : number[] = [1 ,2 , 3, 4, 5, 6, 7, 8,];
console.log(avgRange(list,K,C));
let arr : number[] = [ 0 , 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];
let slice = arr.splice(2,3);
console.log(arr,slice);

let num : number = 12345;
