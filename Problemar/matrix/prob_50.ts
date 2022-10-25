/*Matrix50. An M × N matrix of real numbers is given. For each matrix column
exchange values of its minimal and maximal element. */

function swapMax(matrix: number[][]) {
  for (let i = 0; i < matrix[0].length; i++) {
    let max: number = Number.MIN_SAFE_INTEGER;
    let min: number = Number.MAX_SAFE_INTEGER;
    let temp: number = 0;

    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] > max) {
        max = matrix[j][i];
        console.log("max", max);
      }
      if (matrix[j][i] < min) {
        min = matrix[j][i];
        console.log("min", min);
      }
    }
    
    temp = min;
    min = max;
    max = temp;
    console.log("Swapped max with min: ", max, "/b", "Swapped min with max : ", min);
  }
}

const matrixTest: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 9],
];
console.log(swapMax(matrixTest));
