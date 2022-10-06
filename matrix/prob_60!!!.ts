// Matrix60. An M × N matrix of real numbers is given. Reflect its elements about the
// vertical axis of symmetry of the matrix (that is, exchange matrix columns with
// the order numbers 1 and N, 2 and N − 1, and so on). 

function ReflectMatrix(matrix:number[][]){
    for(let i = 0 ; i < matrix.length; i++) {
        let temp : number;
        const row = matrix[i];
        for( let j = 0 ; j < matrix[0].length; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[matrix.length-1-i][row.length-i];
            //console logs for testing purposes 
            console.log(matrix[matrix.length-1-i][row.length-i]);
            matrix[matrix.length-1-i][row.length-i] = matrix[i][j];
            console.log(matrix[i][j]);
        }
    }
    console.log(matrix);
}

const matrixTest_3 : number[][] = [[1,2],[3,4],[5,6],[7,8],[9,10]];

console.log(ReflectMatrix(matrixTest_3));