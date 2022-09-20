/*Func8. Write an integer function Quarter(x, y) that returns the number of a
coordinate quarter containing a point with nonzero real-valued coordinates
(x, y). Using this function, find the numbers of coordinate quarters containing
each of three points with given nonzero coordinates*/
 function Quarter( x : number , y : number) :void{
    x = 1/4 *x;
    y= 1/4 * y;
    console.log("The coordinate quarters are : ", x ,"and",  y);
}
let a : number = 20;
let b : number = 50;
Quarter(a, b);