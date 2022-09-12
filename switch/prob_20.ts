/*Case20. Given two integers D (day) and M (month) that represent a correct date,
output the zodiacal name corresponding to this date: ―Aquarius‖ 20.1–18.2,
―Pisces‖ 19.2–20.3, ―Aries‖ 21.3–19.4, ―Taurus‖ 20.4–20.5, ―Gemini‖ 21.5–
21.6, ―Cancer‖ 22.6–22.7, ―Leo‖ 23.7–22.8, ―Virgo‖ 23.8–22.9, ―Libra‖ 23.9–
22.10, ―Scorpio‖ 23.10–22.11, ―Sagittarius‖ 23.11–21.12, ―Capricorn‖ 22.12–
19.1. */

let day : number = 25;
let month : number = 12;
let sign = ' ';

switch(month){
    case 1:
        if (day < 20)
       sign = "Capricorn";
         else
       sign = "Aquarius";
        break;
    case 2 :
        if (day < 19)
       sign = "Aquarius";
         else
       sign = "Pisces";
       break;
    case 3: 
        if (day < 21)
       sign = "Pisces";
        else
       sign = "Aries";
        break;
    case 4 : 
        if (day < 20)
       sign = "Aries";
        else
       sign = "Taurus";
        break;
    case 5: 
        if (day < 21)
       sign = "Taurus";
        else
       sign = "Gemini";
        break;
    case 6:
        if (day < 21)
       sign = "Gemini";
        else
       sign = "Cancer";
        break;
    case 7:
        if (day < 23)
       sign = "Cancer";
        else
       sign = "Leo";
        break;
    case 8:
            if (day < 23)
        sign = "Leo";
        else
       sign = "Virgo";
        break;
    case 9:
        if (day < 23)
        sign = "Virgo";
         else
        sign = "Libra";
        break;
    case 10:
        if (day < 23)
        sign = "Libra";
        else
        sign = "Scorpio";
        break;
    case 11:
    if (day < 22)
       sign = "scorpio";
    else
       sign = "Sagittarius";
        break;
    case 12:
        if (day < 22)
       sign = "Sagittarius";
        else
       sign ="Capricorn";    
        break;
}
 console.log("The astrological sign for " + day + " " + month + " is " + sign );
