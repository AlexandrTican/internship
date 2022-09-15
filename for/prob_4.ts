/*For4. Given the price of 1 kg of sweets (as a real number), output the cost of 1, 2, …,
10 kg of these sweets.*/
let price : number = 15;
let kg : number = 1;
for ( let i = 0; i < 9 ; i++){
    kg++;
    price +=15; 
    console.log("\n The price of ", kg,  " kg is ", price);
}