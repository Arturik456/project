let num = 33721,
	mult = 1

for (i = 0; i < 5; i++) {
	
	mult = mult * (num%10);
	console.log(num%10);
	num = Math.floor(num / 10);
}
console.log(mult);

/*let num = 33721;
var digits = [];
while (num > 0) {
	digits[digits.length] = num % 10;
	num = parseInt(num / 10);
}
digits.reverse();
console.log(digits);*/

/*var number = 33721,
	output = [];

while (number) {
	output.push(number % 10);
	number = Math.floor(number / 10);
}

console.log(output.reverse().join(','));*/

/*var num = 33721;
var digits = nun.toString().split('');
console.log(digits);*/

/*let num = 33721,
	output = [],
	sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
	output.push(+sNumber.charAt(i));
}

console.log(output);*/

/*let num = 33721,
	mult = 1

for (i = 0; i < 5; i++) {
	
	mult = mult * (num%10);
	console.log(num%10);
	num = Math.floor(num / 10);
}
console.log(multiplication);*/

/*let num = 33721,
	mult = 1,
	separateDigits = num.toString().split(""), i, l = separateDigits.length;

	for(i = 0, i < l; i++) {
		someObject.someMethod( +separateDigits[i] );
	}*/

/*let num = 33721,
	mult = 1

	for (i = 0; i < 5; i++)
	{
		mult = mult * (num%10);
		console.log(mult%10);
		num = Math.floor(num / 10);
		// num=num.toString().split("").map(value=>parseInt(value,10));	
	}

console.log(mult);
*/

