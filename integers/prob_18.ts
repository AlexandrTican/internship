/*Integer18. An integer greater than 999 is given. Using one operator of integer
division and one operator of taking the remainder find a thousands digit of the
given integer. */
let x : number = 5219;
let thousand : number = Math.trunc(5219 / 1000);
console.log(thousand);