$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.headline').css({
		'transform' : 'translate(0px, '+ wScroll /2.5+'%)'
	});

	if(wScroll > $('.params_s').offset().top-($(window).height() /0.8)){
		$('.params_s div').each(function(i){

			setTimeout(function(){	
				$('.params_s div').eq(i).addClass('is-showing');
			}, 150* (i+1));
		});
	}

	if(wScroll > $('.element-1').offset().top-($(window).height() /1.0)){
		$('.element-1 div').each(function(i){

			setTimeout(function(){	
				$('.element-1 div').eq(i).addClass('is-showing');
			}, 100);
		});
	}

	if(wScroll > $('.element-2').offset().top-($(window).height() /1.0)){
		$('.element-2 div').each(function(i){

			setTimeout(function(){	
				$('.element-2 div').eq(i).addClass('is-showing');
			}, 100);
		});
	}

	if(wScroll > $('.element-3').offset().top-($(window).height() /1.0)){
		$('.element-3 div').each(function(i){

			setTimeout(function(){	
				$('.element-3 div').eq(i).addClass('is-showing');
			}, 100);
		});
	}

	if(wScroll > $('.element-5').offset().top-($(window).height() /0.8)){
		$('.element-5 div').each(function(i){

			setTimeout(function(){	
				$('.element-5 div').eq(i).addClass('is-showing');
			}, 130 * (i+1));
		});
	}

});

