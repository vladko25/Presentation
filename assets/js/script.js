$(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		vertical: true,
		verticalSwiping: false,
		dots: true,
		appendDots: '.dots',
		infinite: false,
		prevArrow: '.angle-up',
		nextArrow: '.angle-down'
	});

	$('.lazy').slick({
	  lazyLoad: 'onedemand',
	  slidesToShow: 3,
	  slidesToScroll: 1
	});

	$('.slider').mousewheel(function(e) {
	  e.preventDefault();

	  if (e.deltaY < 0) {
	    $(this).slick('slickNext');
	  } else {
	    $(this).slick('slickPrev');
	  }
	});

});


var clipboard = new ClipboardJS('.toCopy');

clipboard.on('success', function(e) {

new_text = ('Text:', e.text); alert('Скопировано : ' + new_text);

e.clearSelection();

});

clipboard.on('error', function(e) {

alert('не скопировано');

});