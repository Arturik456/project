window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0],
		about_Btn = document.getElementsByTagName('a')[0],
		photo_Btn = document.getElementsByTagName('a')[1],
		price_Btn = document.getElementsByTagName('a')[2],
		cont_Btn = document.getElementsByTagName('a')[3];



	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1) 

	function showTabContent(b) {
		if( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

//Timer

	let deadline = '2018-06-14';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60),
		minutes = Math.floor( (t/1000/60) % 60 ),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	}

	function setClock(id, endtime) {
		
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds');
		let timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			if (t.hours < 10 && t.hours > 0) {
				hours.innerHTML = '0' + t.hours;
			} else hours.innerHTML = t.hours;
			if (t.minutes < 10 && t.hours > 0) {
				minutes.innerHTML = '0' + t.minutes;
			} else minutes.innerHTML = t.minutes;
			if (t.seconds < 10 && t.seconds > 0) {
				seconds.textContent = '0' + t.seconds;
			} else seconds.innerHTML = t.seconds;
		
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
			}
		}
		
	}
setClock('timer', deadline);

//Плавная прокрутка

function animate (draw, duration) {
	let start = performance.now();

	requestAnimationFrame( function animate(time) {
		let timePassed  = time - start;

		if (timePassed > duration) {
			tomePassed = duration;
		}
		draw(timePassed);

		if (timePassed < duration) {
			requestAnimationFrame(animate);
		}
	})
}

let navigation = document.getElementsByTagName('nav')[0];

navigation.addEventListener('click', function(event) {
	event.preventDefault();

	animate(function (timePassed) {
		let target = event.target;

		let section = document.getElementById( target.getAttribute('href').slice(1) );

		window.scrollBy( 0, section.getBoundingClientRect().top  /20 - 3);

	}, 1500)
})

//Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		description_btn = document.getElementsByClassName('description-btn');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	
	for (let i=0; i<description_btn.length; i++) {
		description_btn[i].addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';		
		});		
	}

	class Options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}

		CreateElement() {
			let elem = document.createElement('div');
			document.body.appendChild(elem);
			elem.style.cssText = `height: ${this.height}px;	width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
		}
	}

	let elem = new Options(200, 200, 'red', 20, 'center');

	elem.CreateElement();

});