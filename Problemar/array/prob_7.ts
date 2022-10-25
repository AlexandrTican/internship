/*Array7. Given an array of N real numbers, output its elements in inverse order. */


function inverse(list:number[]):void
{
    for(let i = list.length-1 ; i >= 0 ; i--)
    {
        console.log(list[i] + " ")
    };
}


const x : number[] = [10,20,50,100]
console.log(x);
console.log(inverse(x));
console.log(x.reverse());