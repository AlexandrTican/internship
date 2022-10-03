/*Matrix10. An M × N matrix of real numbers is given. Output elements of its columns
with odd order numbers (1, 3, …). An output of matrix elements must be
performed in the order of columns. Do not use conditional statements.*/

function oddArray(matrix:number[][]){
    for(let rowIndex = 0; rowIndex < matrix.length;rowIndex++) {
        const row = matrix[rowIndex];

        for(let colIndex = 1; colIndex < row.length;colIndex+=2){
            console.log(row[colIndex]);
        }
    }
}
const testMatrix : number[][] = [[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]];
console.log(oddArray(testMatrix));