// Matrix70. An M × N matrix of real numbers is given. Double the occurrence of the
// matrix row that contains the maximal matrix element.

function maxDouble(matrix: number[][]): number[][] {
  let max: number = Number.MIN_SAFE_INTEGER;

  //finding max value
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  //another loop through matrix for doubling matrix row
  for (let i = 0 ; i < matrix.length;i++) { 
    for ( let j = 0 ; i < matrix.length; j++) {
      if(matrix[i][j]=== max) { 
        // matrix.splice(matrix[i][0],0,matrix[i])

      }
    }
  }
  console.log(max);
  return matrix;
}

const matrix_1: number[][] = [
  [1, 2],
  [9, 5],
  [2, 3],
  [3, 4],
];
console.log(maxDouble(matrix_1));
