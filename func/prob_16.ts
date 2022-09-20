/*Func16. Write a logical function IsPalindrome(K) that returns True, if the decimal
representation of a positive parameter K is a palindrome (i. e., it is read equally
both from left to right and from right to left), and False otherwise. Using this
function, find the amount of palindromes in a given sequence of 10 positive
integers. */


function reverseDigits(num : number)
{
	let rev_num : number = 0;
	while (num > 0) {
		rev_num = rev_num * 10 + num % 10;
		num = Math.floor(num / 10);
	}
	return rev_num;
}

function isPalindrome(n : number)
{

	// get the reverse of n
	let rev_n : number = reverseDigits(n);

	// Check if rev_n and n are same or not.
	if (rev_n === n)
		return 1;
	else
		return 0;
}

	let n : number = 4562;
	console.log("Is " + n + " a Palindrome number? -> ")
	console.log(isPalindrome(n) === 1 ? "true" : "false" );

	let m : number = 2002;
	console.log("Is " + m + " a Palindrome number? -> ")
	console.log(isPalindrome(m) === 1 ? "true" : "false");
	



