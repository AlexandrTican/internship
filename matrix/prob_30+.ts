/*Matrix30. An M × N matrix of real numbers is given. For each matrix column find
the amount of elements that are greater than the average of all elements of this
column. */  

function avgCompare(matrix:number[][]){
    for( let i = 0 ; i < matrix[0].length; i++) {
        let avg = 0;
        let counter = 0;
        console.log("column");
        for( let j = 0 ; j < matrix.length;j++) {
            console.log(matrix[j][i]);
            avg += matrix[j][i]
            counter++
        }
        avg = avg / counter
        for(let i = 0; i < matrix[0].length;i++) {
            for (let j = 0; j < matrix.length;j++) {
                if(matrix[j][i] > avg) {
                    console.log("A bigger than average element is ",matrix[j][i])
                }
            }
        };
        //add a count , another for(double), bigger 
                console.log("avg for this column is",avg);
    }
}
// function avgFinder(matrix:number[][]){
//     let avg : number = 0;
//     // push avg of each column in an array... go through initial array again and compare with avg of column
//     // for ( let rowIndex = 0 ; rowIndex < matrix.length; rowIndex++)
//      for ( let rowIndex = 0; rowIndex < matrix.length;rowIndex++){
//         const row = matrix[rowIndex];
//         // for( let colIndex =0 ; colIndex < row.length; colIndex++) 
//         for(let colIndex=0; colIndex < row.length;colIndex++){
//             // avg += row[colIndex];
//             console.log(row[colIndex]);
//         }
//     }
//     // console.log("There are ",matrix.length ,'\b',"elements in the matrix");
//     // avg = avg / (matrix.length-1)
// }

const testMatrix_2 : number[][] = [[1,2,3],[3,4,5],[5,6,7],[7,8,9],[9,10,11]];
console.log(avgCompare(testMatrix_2));