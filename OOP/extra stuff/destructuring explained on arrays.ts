const alphabet : string[] = ['A','B','C','D','E','F'];
const numbers : string[] =['1','2','3','4','5','6']; 

// this is stupid , use destructuring!!
const[a,b,c] = alphabet;
// we can skip elements by using a comma!
const [a1,,c1,...rest] = alphabet;
// get all elemns
const [...all] = alphabet;

// we can combine two arrays , will be useful for objects!
const combinedArray = [...alphabet, ...numbers];
// can also be done with concat if string
const concatArray = alphabet.concat(numbers);
console.log(a,b,c);
console.log(a1,c1,rest);
console.log(all);
// const first  = alphabet[0];
// const second = alphabet[1];
// console.log(first);
// console.log(second);

function sumAndMultiply(a:number,b:number) {
    return [a+b,a*b,a/b]
}
// first from return arr will be sum, second is multiply, third sets a default value
const [sum, multiply,division ='No division'] = sumAndMultiply(2,3);
console.log(sum);
console.log(multiply);
console.log(division);