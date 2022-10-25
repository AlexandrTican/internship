// Matrix70. An M × N matrix of real numbers is given. Double the occurrence of the
// matrix row that contains the maximal matrix element.

function maxDouble(matrix: number[][]){
  let max : number = 0;
  let index : number = 0;
  let result: number[][] = [[]];
  let maxRow :number[] = [];
  //finding max value in initial matrix; and find index number of max!!!
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
        index = i
        //testing index value
        console.log("index is",i);
      }
    }
    
  }
  
  //copy all elements from first matrix to second.
  for (let i = 0 ; i < matrix.length;i++) { 
      // result[i][j] = matrix[i][j];
      result[i] = matrix[i].slice();
      //adds an extra line
      if(i === index) { 
        // result[result.length-1]=matrix[i].slice();
        // maxRow.concat(matrix[index]);
        // result.push(matrix[index]);
        result[matrix.length] = matrix[i].slice();
      }
  }
  console.table(matrix);
  console.table(result);
  
}

const matrix_1: number[][] = [
  [1, 2],
  [9, 5],
  [2, 3],
  [3, 4],
];
console.log(maxDouble(matrix_1));
