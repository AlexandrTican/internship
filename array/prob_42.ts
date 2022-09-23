/*Array42. A real number R and an array of N real numbers are given. Find two
adjacent elements whose sum of values is the nearest to the number R and
output these elements in ascending order of its indices (see the definition of
two nearest numbers in Array40).an element AK such that the value |AK − R| is minimal)*/

function  nearSum(R : number , list:number[]):number[]{
    const sumArray :number[] = [];
    for(const value of list){
        list[value] += list[value+1];
        sumArray.push(list[value]);
    }
    return sumArray;
}
const arr_test :number[] = [1 ,3 ,5 ,6, 7, 8, 9, 11]
let R2 : number = 10;
console.log(nearSum(R2,arr_test));