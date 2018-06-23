function calc() {
			let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSun = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function() {
				personsSun = +this.value;
				total = (daysSum + personsSun)*4000;
				if (persons.value == '') {
					totalValue.innerHTML = 0;
				} else if (restDays.value = '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			persons.onkeyup = function (input) {
				return this.value = this.value.replace(/[^\d]/g, '');
			}

			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (daysSum + personsSun)*4000;
				if (restDays.value == '') {
					totalValue.innerHTML = 0;
				} else if (persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			restDays.onkeyup = function (input) {
				return this.value = this.value.replace(/[^\d]/g, '');
			}

			place.addEventListener('change', function() {
				if (restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
						totalValue.innerHTML = a * this.options[this.selectedIndex].value;
					}
			})
}

module.exports = calc;