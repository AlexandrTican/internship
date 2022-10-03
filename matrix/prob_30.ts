/*Matrix30. An M × N matrix of real numbers is given. For each matrix column find
the amount of elements that are greater than the average of all elements of this
column. */

function avgFinder(matrix:number[][]){
    let avg : number = 0;
    // push avg of each column in an array... go through initial array again and compare with avg of column
    for ( let rowIndex = 0 ; rowIndex < matrix.length; rowIndex++) {
        const row = matrix[rowIndex];
        for( let colIndex =0 ; colIndex < row.length; colIndex++) {
            avg += row[colIndex];
        }
    }
    console.log("There are ",matrix.length ,'\b',"elements in the matrix");
    avg = avg / (matrix.length-1)
}