/*Func12. Write a logical function IsPowerN(K, N) that returns True, if an positive
integer parameter K is equal to N (> 1) raised to some integer power, and False
otherwise. Having input an integer N (> 1) and a sequence of 10 positive
integers and using this function, find the amount of powers of base N in the
given sequence. */

function IsPowerN(K:number, N:number,){
    for (let i = 1 ; i < 10 ; i++){
        if(Math.pow(N,i) === K){
            return true
              }
            else{
                return false
            }
    } 
}

let k_input : number = 4;
let n_input : number = 2;
if(IsPowerN(k_input,n_input) === true){
    console.log(' Function returns true')
}else{
    console.log('Function returns false')
};
