/*Integer30. Given a year (as a positive integer), find the respective number of the
century. Note that, for example, 20th century began with the year 1901. */
let currentYear : number = 2416;
let century : number = Math.trunc((currentYear / 100 ) + 1);
console.log(century);