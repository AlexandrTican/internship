/*Array35. Given an array of N real numbers, find the minimum among its local
maximums (see the local maximum definition in Array33).*/

function minLMAX(list:number[]){
    const localMax: number[] =[];
    for(let i = 0 ; i < list.length ; i++){

        if (i === 0 && list[i] > list[i+1]) {
            localMax.push(list[i]);
            continue;
        }

        if( i === list.length - 1 && list[i] > list[i-1]){
            localMax.push(list[i]);
            continue;
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
     return min;
    }


const arr: number[] = [3, 2, 0, 4, 3, 6, 5, 8, 9];
console.log(minLMAX(arr));