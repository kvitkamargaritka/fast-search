$( document ).ready(function() {
	$('.banner.parallax-js').parallax({imageSrc: 'img/nyc.jpg'})
  $('.info.parallax-js').parallax({imageSrc: 'img/sunny-people.jpg'})

	$('.slider.is-general').children('.container').children('.slider__wrap').owlCarousel({
		items : 4,
		margin : 10,
		nav : true,
		navText: false,
		loop : true
	});

	$('.slider.is-about').children('.slider__wrap').owlCarousel({
		items : 1,
		nav : true,
		navText: false,
		loop : true
	});

	$('.slider.is-blog').children('.slider__wrap').owlCarousel({
		items : 2,
		nav : true,
		navText: false,
		margin: 10,
		loop : true
	});

});
