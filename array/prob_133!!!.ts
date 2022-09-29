/*Array133. A set A of N points in the coordinate plane is given (points are determined
by their coordinates x, y). Find the point of A that lies in the first or the third
coordinate quarter and is the nearest to the origin. If the set A does not contain
such points then output the origin (0, 0). */
// Each set of points must be stored either in two arrays of numbers (the first
//     array stores x-coordinates, the second one stores y-coordinates) or in one array of
//     records with two fields x and y.

/* IMPORTANT !!!!!!!!! = first and third quarter means ++ or --  : so values in x , y arrays must be ++ or -- */
//and closest element to 0;
     
    function coordCheck(x:number[],y:number[]):number[]{
        const temp : Array<number> = [];
        const result : Array<number> =[];
        //finding elements that are in first and third quarter, putting them in a temp array
        for(let i = 0 ; i <x.length;i++){
            if((x[i] >= 0 && y[i] >= 0) || (x[i]<= 0 && y[i]>=0)){
                temp.push(x[i],y[i]);
            }
        }
        //finding the element closest to 0;
        for(let i = 0; i < temp.length;i++){
            
        }
        return result;
    }