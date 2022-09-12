/*Case4. A number of month is given (as an integer in the range 1 to 12): 1 —
January, 2 — February, etc. Output the amount of days in the month for a nonleap year. */
let month : number = 12
switch(month){
    case 1:
        console.log("January - 31 days");
        break;
    case 2:
        console.log("February - 28 days");
        break;
    case 3:
        console.log("March - 31 days");
        break;
    case 4:
        console.log("April - 30 days");
        break;
    case 5: 
        console.log("May - 31 days");
        break;
    case 6:
        console.log("June - 30 days");
        break;
    case 7: 
        console.log("July - 31 days");
        break;
    case 8:
        console.log("August - 31 days");
        break;
    case 9:
        console.log("September - 30 days");
        break;
    case 10:
        console.log("October - 31 days");
        break;
    case 11:
        console.log("November - 30 days");
        break;
    case 12:
        console.log("December - 31 days");
        break;
    default:
        console.log(" \n  You entered an invalid month, please enter a value between 1 - 12");
}        