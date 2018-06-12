let open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.getElementsByClassName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	bth = document.getElementsByTagName('button'),
	choose_items = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');

let money,
	price

document.addEventListener('DOMContentLoaded', () => {
	budgetBtnDisabled();
	time_value.disabled = true;
});

open.addEventListener('click', () => {
	do {
	money = prompt("Ваш бюджет?", '');
	} while (isNaN(money) || money == "" || money == null) 
	
	budget_value.textContent = money;

	time_value.disabled = false;

	name_value.textContent = prompt("Название вашего магазина?", '').toUpperCase();

	if (confirm ("Хотите получить товар по акции?")) {
		discount_value.style.backgroundColor = "green";
	} else {
		diskount_value.style.backgroundColor = "red";
	}
	console.log(mainList.diskount);

});

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++) {
			let a = goods_item[i].value

			if ((typeof(a)) === "string" && (typeof(a)) !== null && a.length < 50) {
				console.log("Все верно!");
				mainList.shopGoods[i] = a;
				goods_value.textContent = mainList.shopGoods;
			} else {
				i = i - 1;
		}
	}
});

choose_items.addEventListener('change', () => {
	let items = choose_items.value;

	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(", ");
		mainList.shopItems.sort();

		items_value.textContent = mainList.shopItems;
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
		console.log('Такого просто не может быть');
		mainList.open = false;
		budgetBtnDisabled();
		} else if (time > 8 && time < 20) {
			console.log('Время работать!')
			mainList.open = true;
			budgetBtnDisabled();
			goodsBtnEnable();
			employersBtnEnable();
				} else if(time < 24) {
					console.log('Уже слишком поздно!');
					mainList.open = false;
					budgetBtnDisabled();
					} else {
						console.log('В сутках только 24 часа!');
						mainList.open = false;
						budgetBtnDisabled();
						}

	if(mainList.open == true) {
		isopen_value.style.backgroundColor = 'green'
	} else {
		isopen_value.style.backgroundColor = 'red'
	}
});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = money / 30;
});

count_budget_value.addEventListener('keydown', (event) => {
	event.preventDefault();
});

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hire_employers_item.length ; i++) {
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;

		employers_value.textContent += mainList.employers[i] + ', ';
	}
});

function budgetBtnDisabled () {

	if (mainList.open == false) {
		goods_btn.disabled = true;
		budget_btn.disabled = true;
		employers_btn.disabled = true;
		discount_value.disabled = true;
		choose_items.disabled = true;
	for (let i = 0; i < goods_item.length; i++) {
		goods_item[i].disabled = true;
	}
	for (let i = 0; i < hire_employers_item.length; i++) {
		hire_employers_item[i].disabled = true;
		}
	} else {
		choose_items.disabled = false;
		budget_btn.disabled = false;
		for (let i = 0; i < goods_item.length; i++) {
			goods_item[i].disabled = false;
		}
		for (let i = 0; i < hire_employers_item.length; i++) {
			hire_employers_item[i].disabled = false;
		}
	}
};

function goodsBtnEnable () {
	for (let i = 0; i < goods_item.length; i++) {
		goods_item[i].addEventListener('change', () => {
			let b = false;

			for (let j = 0; j < goods_item.length; j++) {
				let value = goods_item[j].value.trim();
				if (value !== "") {
					b = true;
					break;
				}
			}
			goods_btn.disabled = !b;
		});
	}
};

function employersBtnEnable () {
	for (let i = 0; i < hire_employers_item.length; i++) {
		hire_employers_item[i].addEventListener('change', () => {
			let b = false;

			for (let j = 0; j < hire_employers_item.length; j++) {
				let value = hire_employers_item[j].value.trim();
				if (value !== "") {
					b = true;
					break;
				}
			}
			employers_btn.disabled = !b;
		});
	}
};
/*
open.setAttribute('onclick', 'dis()');
for (let i = 1; i < bth.length; i++) {
	bth[i].setAttribute('disabled', '');
	bth[i].style.filter = 'grayscale(10%) blur(2px)';
}
function dis()  {
	for (let i = 0; i < bth.length; i++) {
		if (open == true) {
			bth[i].removeAttribute('disabled');
			bth[i].style.filter = 'none';
		}
	}
}

discount_value.addEventListener('click', () => {
	if (money < 0) {
		console.log('Сумма меньше нуля');
		mainList.diskount = false;
		} else if (money > 50000) {
			console.log('Все в поряде!');
			mainList.diskount = true;
			} else {
				console.log('Слишком много!');
				mainList.diskount = false;
				}

	if (mainList.diskount == true) {
		discount_value.style.backgroundColor = "green";
	} else {
		discount_value.style.backgroundColor = "red";
	}

});
*/

const mainList = {
	budget: money,
	nameStore: name,
	shopGoods: [],
	employers: {},
	open: false,
	diskount: true,
	shopItems: []
}

console.log(mainList);
