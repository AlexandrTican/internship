/*Case8. Given two integers D (day) and M (month) representing a correct date of a
non-leap year, output values D and M for the previous date*/
let day : number = 1;
let month : number = 2;
if(day > 1 && day < 31) {
    day--
}
switch(day){
    case 1: 
    if(month = 1 || (month = 3) || (month = 5) || (month = 7) || (month = 8) || (month = 10) || (month = 12)){
        day = 31;
        if(month = 1){
            month = 12;
             }}else{
                month--;
        }
    if(month = 4|| (month = 6) || (month = 9) || (month = 11)){
        day = 30;
        month--;
    }
    else{
        day = 28;
        month--
        break;
    }
    }
console.log(" Previous day is ( day / month)  " , day , month);



