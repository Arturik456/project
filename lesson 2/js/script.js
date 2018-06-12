var first = prompt("Ваш бюджет на месяц?", "20000");
var second = prompt("Название вашего магазина?");
let time = 19;

mainList = {
	budget: first,
	nameStore: second,
	open: true,
	shopGoods: [],
	employers: {}
};

for (let i = 0; i < 3; i++) {
	let a = prompt ('Какой тип товаров будем продавать?');

	if ((typeof(a)) === "string" && (typeof(a)) !== "" && a.length < 50) {
		console.log("Все верно!");
		mainList.shopGoods[i] = a;
	} else {

	}
}

/*var tovar = prompt("Какой тип товаров будем продавать?");
var b = 0;

while (b < 2) {
	prompt("Какой тип товаров будем продавать?", tovar);
	b++;
};

var tovar2 = prompt("Какой тип товаров будем продавать?");
var d = 0;

do {
	prompt("Какой тип товаров будем продавать?", tovar2);
	d++;
}
while (d < 2);*/


if (time < 0) {
	console.log('Такого просто не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать!')
	} else if(time < 24) {
		console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
			}

prompt("Бюджет за один день!", mainList.budget/30);

console.log(mainList);