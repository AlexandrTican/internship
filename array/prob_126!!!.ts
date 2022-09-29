/*Array126. An integer L (> 0) and an array of N integers are given. Replace each
series, whose length is equal to L, by one element with zero value (see the
series definition in Array116). */

function replaceSeries(arr:number[],length:number):any[]{
    const result : Array<number> =[];
    for( let i = 1; i < arr.length; i++){
        let counter = 0;
        for(let j = 0 ; j < arr.length; j++){
            if(arr[i]===arr[j]){
                counter++;
                console.log(counter);
            }
        }
        if(counter===length){
            arr.splice(arr[i],counter,0);
        }
    }
    return arr;
}

const myArray : Array<number> = [1,2,2,2,3,3,4,4];
let L : number = 2
console.log(replaceSeries(myArray,L));