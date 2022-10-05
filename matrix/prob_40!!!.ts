/*Matrix40. An M × N matrix of integers is given. Find the order number of the last
row that contains the maximal amount of elements with equal values.*/

//check if u can find a way to get to the last row!!!!

function equalMax(matrix:number[][]){
    let result : number[] =[];
    let counter : number = 0;
    for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
        const row = matrix[rowIndex];
        //counter is reset to 0 for next row;
        counter = 0;
        for(let colIndex = 0; colIndex < row.length; colIndex++){
            if(row[colIndex]===row[colIndex+1]){
                counter++;
            }
        }
        //push amount of equal elements into array;
        result.push(counter);
        console.log(counter);
    }
    if(result.length === 0) { 
        return console.log("There are no equal elements");
    }
    console.log("The last row's order number  is...",result.indexOf(Math.max(...result)));
}

const matrix : number[][] = [[1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3],[3,3,3,3,3,3,3,3,3],[9,10]];
console.log(equalMax(matrix));