/*Array35. Given an array of N real numbers, find the minimum among its local
maximums (see the local maximum definition in Array33).*/

function minLMAX(list:number[]){
    const localMax: number[] =[];
    for(let i = 1 ; i < list.length ; i++){
        // if(list[i] > list[i-1] && list[i] > list[i+1]){
        //     localMax = [list[i]];
        //     console.log(localMax);
        // }
        if (i === 0 && list[i] > list[i+1]) {
            localMax.push(list[i]);
        }
        if(list[i] > list[i+1] && list[i] > list[i-1]){
            localMax.push(list[i])
        }
    }
    console.log(localMax);
    let min : number = Number.MAX_SAFE_INTEGER;
    for(const value of localMax){
        if(value < min){
            min = value;
        }
    }
    // for(let i = 0; i < localMax.length;i++){
    //     min = localMax[i];
    //     if(localMax[i] < min){
    //         min = localMax[i]
    //     }
    return min;
    }
  
    //     if(list[i] > list[i-1] && list[i] > list[i+1]){
    //     localMax.push(list[i])
    //     console.log(localMax);
    // }


const arr: number[] = [3, 2, 0, 4, 3, 6, 5, 8, 9];
console.log(minLMAX(arr));