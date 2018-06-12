let title = document.getElementById('title'),
	deviceId = document.getElementById('prompt'),
	device = document.querySelector('.prompt'),
	item = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu'),
	nav = document.getElementsByClassName('nav'),
	adv = document.querySelector('.adv'),
	col = document.querySelectorAll('.column'),
	li = document.createElement('li')

	title.innerHTML = 'Мы продаем подлинную технику Apple';
	
	menu.insertBefore(item[1], item[3]);
	col[1].removeChild(adv);

	li.setAttribute('class', 'menu-item');
	li.innerHTML = 'Пятый пункт';
	menu.appendChild(li);

	document.body.style.backgroundImage = "url(./img/apple_true.jpg)";

obj = {
	mail: deviceId,
	pop: {},
	start: function start() {
		deviceId = prompt("Как вы относитесь к продукции Apple?", "");
		for (let i = 0; i < 1; i++) {
				obj.pop[i] = deviceId;
				device.innerHTML = deviceId;
				}
			}
		}

console.log(obj);
obj.start();