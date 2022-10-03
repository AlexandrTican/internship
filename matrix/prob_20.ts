/*Matrix20. An M × N matrix of real numbers is given. Find the product of elements
for each matrix column*/

function multiplyMatrix(matrix:number[][]):number{
    //to get rid of undefined ,make sure your function returns something!!!!
    let prod : number = 1;
    for( let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        const row = matrix[rowIndex];
        for ( let colIndex = 0 ; colIndex < row.length-1; colIndex++ ) {
            // console.log(colIndex+1, row.length);
            prod = row[colIndex] * row[colIndex+1];        
            console.log(prod);
    }
}
return prod;
}
const testMatrix_1 : number[][] = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
console.log(multiplyMatrix(testMatrix_1));