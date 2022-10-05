/*Matrix40. An M × N matrix of integers is given. Find the order number of the last
row that contains the maximal amount of elements with equal values.*/

function equalMax(matrix:number[][]){
    let result : number[] =[];
    let counter : number = 0;
    for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
        //push amount of equal elements in array;
        const row = matrix[rowIndex];
        result.push(counter);
        //counter is turned to 0;
        counter = 0;
        for(let colIndex = 0; colIndex < row.length; colIndex++){
            if(row[colIndex]===row[colIndex+1]){
                counter++
            }
        }
    }
}