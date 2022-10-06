// Matrix60. An M × N matrix of real numbers is given. Reflect its elements about the
// vertical axis of symmetry of the matrix (that is, exchange matrix columns with
// the order numbers 1 and N, 2 and N − 1, and so on). 

function ReflectMatrix(matrix:number[][]){
    for(let i = 0 ; i < matrix.length; i++) {
        let temp : number[][]  = 0;
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