/*Days of week are numbered as: 1 — Monday, 2 — Tuesday, …, 6 —
Saturday, 7 — Sunday. An integer K in the range 1 to 365 is given. Find the
number of day of week for K-th day of year provided that in this year
January 1 was Saturday. */
let today : number = 8;
let weekday : number = (today - 2 )%  8;
console.log(weekday);