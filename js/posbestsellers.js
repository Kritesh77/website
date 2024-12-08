$(document).ready(function() {
	var $bestsellerSlideConf = $('.pos_bestsellers_product');
	var items       = parseInt($bestsellerSlideConf.attr('data-items'));
	var speed     	= parseInt($bestsellerSlideConf.attr('data-speed'));
	var autoPlay    = parseInt($bestsellerSlideConf.attr('data-autoplay'));
	var time    	= parseInt($bestsellerSlideConf.attr('data-time'));
	var arrow       = parseInt($bestsellerSlideConf.attr('data-arrow'));
	var pagination  = parseInt($bestsellerSlideConf.attr('data-pagination'));
	var move        = parseInt($bestsellerSlideConf.attr('data-move'));
	var pausehover  = parseInt($bestsellerSlideConf.attr('data-pausehover'));
	var lg          = parseInt($bestsellerSlideConf.attr('data-lg'));
	var md          = parseInt($bestsellerSlideConf.attr('data-md'));
	var sm          = parseInt($bestsellerSlideConf.attr('data-sm'));
	var xs          = parseInt($bestsellerSlideConf.attr('data-xs'));
	var xxs         = parseInt($bestsellerSlideConf.attr('data-xxs'));	

	if(autoPlay==1) {
		if(time){
			autoPlay = time; 
		}else{
			autoPlay = '3000';
		}
	}else{
		autoPlay = false;
	}
	if(pausehover){pausehover = true}else{pausehover=false}
	if(move){move = false}else{move=true}
	if(arrow){arrow =true}else{arrow=false}
	if(pagination==1){pagination = true}else{pagination=false}

	var bestsellerSlide = $(".pos_bestsellers_product .bestsellerSlide");
	bestsellerSlide.owlCarousel({
		autoPlay : autoPlay ,
		smartSpeed: speed,
		autoplayHoverPause: pausehover,
		scrollPerPage: move,
		nav: arrow,
		dots : pagination,			
		responsive:{
			0:{
				items:xxs,
			},
			360:{
				items:xs,
			},	
			576:{
				items:sm,
			},
			768:{
				items:md,
			},
			992:{
				items:lg,
			},
			1200:{
				items:items, 
			}
		}
	});
	checkClasses();
    bestsellerSlide.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses(){
		var total = $('.pos_bestsellers_product .bestsellerSlide .owl-stage .owl-item.active').length;
        $('.pos_bestsellers_product ').each(function(){
			$(this).find('.owl-item').removeClass('firstActiveItem');
			$(this).find('.owl-item').removeClass('lastActiveItem');
			$(this).find('.owl-item.active').each(function(index){
				if (index === 0) { $(this).addClass('firstActiveItem'); }
				if (index === total - 1 && total>1) {
					$(this).addClass('lastActiveItem');
				}
			})  
        });
    }
});

