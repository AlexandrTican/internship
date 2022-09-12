/*Case16. Given an age in years (as an integer in the range 20 to 69), output its
alphabetic equivalent as: ―twenty years‖, ―thirty-two years‖, ―forty-one years‖,
etc. */
let age : number = 66;
let output = " You are ";
//we separate  66 for example, into 60 and 6, 
//to reduce the amount of switch cases needed;
let decades : number = age - (age % 10);
let rightDigit: number = age % 10;
switch(decades){
    case 20 :
        output += "twenty";
        break;
    case 30 :
        output += "thirty";
        break;
    case 40 :
        output += "forty";
        break;
    case 50 :
        output += "fifty";
        break;
    case 60 :
        output += "sixty";
        break;
}
switch(rightDigit){
    case 1: 
    output += " one";
    break;
    case 2:
        output += " two";
        break;
    case 3:
        output += " three";
        break;
    case 4:
        output += " four";
        break;
    case 5:
        output += " five";
        break;
    case 6:
        output += " six";
        break;
    case 7:
        output += " seven";
        break;
    case 8:
        output += " eight";
        break;
    case 9:
        output += " nine";
        break;
    
}
console.log(output + " years old");