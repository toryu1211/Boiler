"use strict";

/* 키워드 */
var keyWordPo = 0
var keyWordRoll = setInterval(keyWordMove,30);
var keyWordRollView = false;

function keyWordMove(){
	keyWordPo --;
	if (-$('.btmBanner li').eq(0).outerWidth() - 3 > keyWordPo)
	{
		$('.btmBanner ul').append($('.btmBanner li').eq(0)).css({'margin-left' :0});
		keyWordPo = 0;
	}
	else
	{
		$('.btmBanner ul').css({'margin-left' :keyWordPo});
	}
}
//모바일일때 헤더 fixed
$(function(){
	var $window = $(window);	

	$window.scroll(function(){
		if($window.width() <= 1000 && $window.scrollTop() > 0){
			$('#header').addClass('fixed');
		}else{
			$('#header').removeClass('fixed');
		}
	});
	

	$('.mo_menu > a').on('click', function(){
		//alert("ok");
		var $nav = $('.menuList')

		if($nav.css('display') == 'none'){
			$nav.show();		
		}else{
			$nav.hide();
		}

		return false;
	});
});