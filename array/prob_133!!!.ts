/*Array133. A set A of N points in the coordinate plane is given (points are determined
by their coordinates x, y). Find the point of A that lies in the first or the third
coordinate quarter and is the nearest to the origin. If the set A does not contain
such points then output the origin (0, 0). */
// Each set of points must be stored either in two arrays of numbers (the first
//     array stores x-coordinates, the second one stores y-coordinates) or in one array of
//     records with two fields x and y.

/* IMPORTANT !!!!!!!!! = first and third quarter means ++ or --  : so values in x , y arrays must be ++ or -- */
//and closest element to 0;
function pointZero(arr: number[][]){
    //array in care se plaseaza distantele de la puncte la origine
    let distance  : Array<number> =[];
    for ( let i = 0 ; i < arr.length; i++){
        let x  = arr[i][0], y= arr[i][1];
        if((x >= 0 && y>= 0) || (x<= 0 && y>=0)){
        distance[i] = (x*x) + (y*y);
    }
    }
    distance.sort(function(a,b){return a-b;});

    console.log("Distance array" , distance);
    for(let i = 0; i < arr.length; i++)
    {
        let x = arr[i][0], y= arr[i][0];
        let dist = x*x + (y*y);
        if(dist===distance[0]){
        console.log(x,y);
        }
    }

    // for(let i = 0; i < arr.length;i++){
    //     let x = arr[i][0], y=arr[i][1];
    //     let dist = (x*x) + (y*y);
    // }
}
const A : number[][] = [[1,2],[-1,3],[0,0],[1,1]];
console.log(pointZero(A));
    //         if((x[0] >= 0 && y[0]>= 0) || (x[0]<= 0 && y[0]>=0)){
    //            return console.log("The pair of coordinates closest to the origin is ",(x[0],y[0]));
    //         } else{
    //             return console.log("There are no suitable elements")
    //         }
    // }