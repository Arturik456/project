$(document).ready(function () {

	$('.main_btna').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	$('.main_btn').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	$('li:eq(7)').on('click', function () {
		$('.overlay').fadeIn('slow');
		$('.modal').slideDown('slow');
	});

	$('.close').click(function() {
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	})

});