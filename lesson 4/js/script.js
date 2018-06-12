let money,
	name,
	time,
	price

function start() {
	money = prompt("Ваш бюджет?", '');

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");
	}

	name = prompt("Название вашего магазина?", '').toUpperCase();
	time = 19;
}
// start();

mainList = {
	budget: money,
	nameStore: name,
	shopGoods: [],
	employers: {},
	open: false,
	diskount: true,
	shopItems: [], 
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt ('Какой тип товаров будем продавать?', '');

				if ((typeof(a)) === "string" && (typeof(a)) !== "" && a.length < 50) {
					console.log("Все верно!");
					mainList.shopGoods[i] = a;
				} else {
					i = i - 1;
			}
		}
	}, 
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!')
			mainList.open = true;
			} else if(time < 24) {
				console.log('Уже слишком поздно!');
				} else {
					console.log('В сутках только 24 часа!');
					}	
	},
	budgetDay: function budgetDay() {
		alert("Бюджет за один день!" + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount() {
		if (mainList.diskount == true) {
			price = (price/100)*80;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 3; i++) {
			let name = prompt("Имя сотрудника");
			mainList.employers[i] = name;
			name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
			if ((typeof(name)) === 'string' && (typeof(name)) !=='' && name.length < 50) {
				console.log('Имя работника добавлено');
				mainList.employers[i] = i + 1 + '-' + name;
			} else {
				console.log('Не добавленно');
				i++;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Перечислите через запятую товары", '');
				if ((typeof(items)) === 'string' && (typeof(items)) !== null && items != "" && items.length < 50) {
					console.log('Все хорошо!');		
					mainList.shopGoods[i] = items;
					mainList.shopItems = items.split(",");
					mainList.shopItems.push(prompt("Продолжите еще", ''));
					mainList.shopItems.sort();
					mainList.shopItems.forEach(function(item, i, arc) {
						document.write('Наш магазин включает в себя: ' + (i + 1) + '' + item + '<br>');
					});
				} else {
					i = i - 1;
					alert("Перечислите через запятую товары", '')
				}
			}
		}
}
mainList.chooseShopItems()