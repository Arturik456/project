window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../parts/tab.js');
	let ajax = require('../parts/ajax.js');
	let animate = require('../parts/animate.js');
	let calck = require('../parts/calc.js');
	let modal = require('../parts/modal.js');
	let slider = require('../parts/slider.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	ajax();
	animate();
	calck();
	slider();
	timer();
	
});