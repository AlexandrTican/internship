// Matrix60. An M × N matrix of real numbers is given. Reflect its elements about the
// vertical axis of symmetry of the matrix (that is, exchange matrix columns with
// the order numbers 1 and N, 2 and N − 1, and so on). 

// function ReflectMatrix(matrix:number[][]){
//     for(let i = 0 ; i < matrix.length / 2; i++) {
//         let temp : number[];
//         temp = matrix[i];
//         matrix[i] = matrix[matrix.length-1-i];
//         //console logs for testing purposes 
//         console.log(matrix[matrix.length-1-i]);
//         matrix[matrix.length-1-i] = temp;
//         console.log(matrix[i]);
//     }
//     console.log(matrix[0],matrix[matrix.length-1]);
//     console.table(matrix);
// }
function ReflectMatrix(matrix:number[][]) {
    let temp = 0;
    for(let i = 0 ; i < matrix.length; i++ ) { 
      let start = 0;
      let end = matrix[i].length - 1;
      while(start != Math.trunc(matrix[i].length / 2)) {
       temp = matrix[i][start];
       matrix[i][start] = matrix[i][end];
       matrix[i][end] = temp;
       start++
       end--
      }
    //   temp = matrix[i][0];
    //    matrix[i][0] = matrix[i][matrix.length-1-i];
    //    matrix[i][matrix.length-1-i] = temp;
    }
    console.table(matrix)
}
//     for(let i = 0 ; i < matrix.length; i++ ) {
//         for(let j = 0;  j < matrix.length; j++ ) { 
//          console.log(matrix[i][j]);   
//         }
//     }
// }
const matrixTest_3 : number[][] = [[1,2,3],[3,4,5],[5,6,7],[8,9,10],[11,12,13,14],[66,1]];

console.log(ReflectMatrix(matrixTest_3))