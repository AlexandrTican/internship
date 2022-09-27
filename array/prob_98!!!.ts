/*Array98. Given an array of N integers, remove all elements whose values appear less
than three times in the array. Output the size of the changed array and all its
elements. */

function removeElements(arr:number[]):number[]{
//map stores frequency of the elements of the array;
const  countMap = new Map();

for(let i = 0; i < arr.length;i++){

    if(!countMap.has(arr[i])){
        countMap.set(arr[i],1)
    }else
    {
        let x = countMap.get(arr[i]);
        countMap.set(arr[i],++x);
    }
}
//deletes teh element that shows up less than 3 times
for ( let i = 0; i < arr.length ; ++i) {
        if(countMap.get(arr[i]) < 3){
            arr.splice(i);
        }
}

return arr;
}
const array : number[] = [2,2,2,2,2,2,5,5,5,5,3,3];

console.log(removeElements(array));