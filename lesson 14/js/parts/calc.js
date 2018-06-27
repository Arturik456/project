function calck(){
	let inputCulc = document.getElementsByClassName('counter-block-input')

for(let i = 0; i < inputCulc.length; i++){
	inputCulc[i].onkeypress = function(e) {
					e = e || event;

					if (e.ctrlKey || e.altKey || e.metaKey) return;

					var chr = getChar(e);
					if (chr == null) return;

					if (chr < '1' || chr > '9') {
						return false;
					}
				}
		}
		function getChar(event) {
					if (event.which == null) {
						if (event.keyCode < 32) return null;
						return String.fromCharCode(event.keyCode) 
					}

					if (event.which != 0 && event.charCode != 0) {
						if (event.which < 32) return null;
						return String.fromCharCode(event.which) 
					}

					return null; 
				}


	 // Калькулятор 

	 let persons = document.getElementsByClassName('counter-block-input')[0],
			 restDay = document.getElementsByClassName('counter-block-input')[1],
			 place = document.getElementById('select'),
			 totalValue = document.querySelector('#total'),
			 personeSum = 0,
			 daysSum = 0,
			 total = 0;

			 totalValue.innerHTML = 0;



			 persons.addEventListener('keyup', function(){
					 this.value = this.value.replace(/[^0-9]/,"");
					 personeSum = +this.value;
						total = (daysSum + personeSum)*4000; 
						if(persons.value == '' || restDay.value == ''){
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						}                
			 });

			 restDay.addEventListener('keyup', function(){
					 this.value = this.value.replace(/[^0-9]/,"");
					 daysSum = +this.value;
					 total = (daysSum + personeSum)*4000;
					 if(persons.value == '' || restDay.value == ''){
						totalValue.innerHTML = 0;
					 } else {
						totalValue.innerHTML = total;
					 }
			 });
			
			place.addEventListener('change', function (){
				if(persons.value == '' || restDay.value == ''){
					totalValue.innerHTML = 0;
				} else {
					let a = total;          
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});
}

module.exports = calck;