// Matrix70. An M × N matrix of real numbers is given. Double the occurrence of the
// matrix row that contains the maximal matrix element. 
 
function maxDouble(matrix:number[][]):number[][]{

    let max : number = Number.MIN_SAFE_INTEGER;

    for(let i = 0 ; i < matrix.length; i ++) {
        for(let j = 0;  j < matrix[0].length; j++) {
            if(matrix[i][j] > max ) { 
                max = matrix[i][j];
            }
        }
    }
    console.log(max);
    return matrix;
}

const matrix_1 : number[][] = [[1,2],[9,5],[2,3],[3,4]];
console.log(maxDouble(matrix_1));