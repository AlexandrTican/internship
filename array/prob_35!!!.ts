/*Array35. Given an array of N real numbers, find the minimum among its local
maximums (see the local maximum definition in Array33).*/

function minLMAX(list:number[]){
    const localMax: number[] =[];
    for(let i = 0 ; i < list.length ; i++){
        // if(list[i] > list[i-1] && list[i] > list[i+1]){
        //     localMax = [list[i]];
        //     console.log(localMax);
        // }
        let num : number = 0;
        
    //     if(list[i] > list[i-1] && list[i] > list[i+1]){
    //     localMax.push(list[i])
    //     console.log(localMax);
    // }
}
return localMax;
}
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(minLMAX(arr));