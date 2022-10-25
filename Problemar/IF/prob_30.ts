/*If30. An integer in the range 1 to 999 is given.
 Output its description string as:
  ―twodigit even number‖, ―three-digit odd number‖, etc.*/
let n : number = 67;
let result = 'The number is a ';
const OneDigit = n >= 0 && n < 10;
const TwoDigits = n >= 10 && n < 100;
const ThreeDigits  = n >= 100 && n < 1000;
const isEven = n % 2;
if(OneDigit){
    result += ' one digit'
}
if(TwoDigits){
    result += ' two  digits'
}
if(ThreeDigits){
    result += ' three digits'
}
if(isEven === 0){
    result += ' even number'
} else{
    result += ' odd number'
}
console.log(result);