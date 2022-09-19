/*While15. A principal of 1000 euro is invested at a rate of P percent compounded
annually. A real number P is given, 0 < P < 25. Find, how many years K it will
take for an investment to exceed 1100 euro. Output K (as an integer) and the
compound amount S of the principal at the end of K years (as a real number)*/
let principal : number = 1000;
let rate : number = 1.05 //5 percent rate 
let years : number =0;
let compound : number = 0;

if(rate < 1 || rate > 1.25){
    console.log("Incorrect rate")
}
while(principal < 1100){
    principal = principal * rate
    years++
}
compound = principal;
console.log(" It will take " ,years ," years to reach 1100 euro")
console.log("The compound amount is ", compound); 