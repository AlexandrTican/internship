/*Array112. An array A of N (≤ 6) real numbers is given. Sort the array in ascending
order by using the exchange sort method (the bubble sorting): compare each
pair of two adjacent elements (A1 and A2, A2 and A3, and so on) and exchange
their values in case the left element is greater than the right one; repeat N − 1
times such array pass. Output all array elements after each pass for checking
results. Note that the amount of  analyzed pairs of the array elements can be
reduced by 1 after each pass*/

// function swap(arr:number[],xp,yp)   
function bubbleSort(arr:Array<number>):any[]{
    for( let i = 0 ; i < arr.length; i++){
         
        for (let j = 0; j < arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                 
            }
            console.log(arr);
        }
    }
return arr;
}
const array: number[] = [4,1,2,5,9119,3,22,55,11];
console.log(bubbleSort(array));