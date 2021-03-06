"use strict";

/* 키워드 */
var keyWordPo = 0
var keyWordRoll = setInterval(keyWordMove,30);
var keyWordRollView = false;

function keyWordMove(){
	keyWordPo --;
	if (-$('.btmBanner li').eq(0).outerWidth() - 30 > keyWordPo)
	{
		$('.btmBanner ul').append($('.btmBanner li').eq(0)).css({'margin-left':0});
		keyWordPo = 0;
	}
	else
	{
		$('.btmBanner ul').css({'margin-left' :keyWordPo});
	}
}
$(document).on('mouseenter', '.btmBanner li a', function(){
	clearInterval(keyWordRoll);
});

$(document).on('mouseleave', '.btmBanner li a', function(){
	if (!keyWordRollView)
	{
		keyWordRoll = setInterval(keyWordMove,30);
	}
});
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

	//모바일 메뉴 아코디언
	$(".menu").click(function(e){
		var $acodian = $(this).next('.acodian');

		if($window.width() <= 1000){
			 e.preventDefault();
			 if($acodian.css('display') == 'none'){
			 	$('.acodian').slideUp();
				$acodian.slideDown();			 	
			 }else{
			 	$('.acodian').slideUp();
			 }
		}else{
			e.unbind();
		}
	});
});