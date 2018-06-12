let money,
	name,
	time,
	price

function start() {
	money = prompt("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}
start();

mainList = {
	budget: money,
	nameStore: name,
	shopGoods: [],
	employers: (),
	open: false,
	diskount: false
};

//Выбираем тип товара
function chooseGoods() {
	for (let i = 0; i < 3; i++) {
		let a = prompt ('Какой тип товаров будем продавать?');

		if ((typeof(a)) === "string" && (typeof(a)) !== "" && a.length < 50) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}
chooseGoods();

//Вызов четырех сотрудников 
function employersJobs() {
	for (let i = 0; i < 4; i++) {
		let nameEmployers = prompt ('Введите имя сотрудника');
		if ((typeof(nameEmployers)) === "string" && (typeof(nameEmployers) !== "" && nameEmployers.length < 50)) {
			console.log("Именна указанны верно!");
			mainList.employers[i] = nameEmployers;
		} else {
			--i;
		} 
	}
}
employersJobs();

//Время работы магазина
function workTime(time) {
	if (time < 0) {
		console.log('Такого просто не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!')
		} else if(time < 24) {
			console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
				}	
}

//Вызов дисконтной информации
function diskountSumm () {
	if (confirm("Хотите получить товар по акции?")) {
		price = prompt("Ведите предполагаемую сумму, узнаете скидку?");
		alert("Ваша скидка составляет" + (price / 100) * 80);	
	} else {
		console.log('Нажата кнопка отмена');
	}
}
diskountSumm();

function budgetDay(x) {
	alert("Бюджет за один день!" + x / 30);
}
budgetDay(mainList.budget);

console.log(mainList);