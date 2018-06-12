for (var i = 2; i <= 100; i++){
		for(var num = 2; num <= i; num++){
				if (i % num == 0) break;
		}
  	if(num == i) document.write(i + ' - делители этого числа: 1 и ' + j + "<br>");
}
/*function getFriendlyNumbers(start, end) {
	function sumDividors(num) {
		let sum = 0;
		for(let i = 1; i < num; i++) {
			if(num % i == 0) {
				sum += i;
			}
		}
		return sum;
	}
	let arr = [];

	if(typeof start === 'string' || typeof end === "string" || start < 1 || end < 1 || start > end || typeof start !== 'number' || typeof end !== 'number') {
		return false;
	}
		else {
			for (let i = start; i < end; i++) {
				for(let j = start; j < end; j++) {
					if (i = sumDividors(j) && (j = sumDividors(i)) && i !=j) {
						arr.push(i, j);
				}
			}
		}
	}
}
console.log(getFriendlyNumbers(1, 100));*/