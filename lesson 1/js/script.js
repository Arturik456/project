var first = +prompt("Ваш бюджет на месяц?", "20000");
var second = prompt("Название вашего магазина?");

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
		console.log('Неверные данные введите по новой');
		i = 0;
		mainList.shopGoods[i];
	}
}

prompt("Бюджет за один день!", mainList.budget/30);