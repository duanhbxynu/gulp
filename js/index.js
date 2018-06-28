slickScroll();	//轮播图
progressBarCir($('.arryList-prog'));/*半圆进度条*/

//首页信息披露上下滚动
setInterval(function(){
	$(".disclosure ul li:first").animate({"marginTop":"-1rem"},2000,function(){				
		var li = $(".disclosure li:first").css("margin-top","0").detach();
		$(".disclosure ul").append(li);					
	})
},3000)










//轮播图
function slickScroll(){
	$('.slick').slick({
		dots: true,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});
}