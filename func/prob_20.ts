/*Func20. Write a real-valued function Fact2(N) that returns a double factorial N!!:
N!! = 1·3·5·…·N, if N is an odd number;
N!! = 2·4·6·…·N otherwise
(N is a positive integer; the real return type allows to avoid the integer
overflow during the calculation of the double factorials for large values of N).
Using this function, find the double factorials of five given integer*/

/*function Fact2(N: number){
    if(N===0){
        console.log(" 0!! = 1");
    }
    let isEven : number = N % 2;
    if(isEven === 0){
        for(let i = 0; i < N; i++){}
    }
}*/
function doublefactorial(n : number) : number
{
    if (n == 0 || n==1)
        return 1;   
    return n * doublefactorial(n - 2);
}
  
// Driver code   

console.log("Double factorial"
        + " is " + doublefactorial(5));