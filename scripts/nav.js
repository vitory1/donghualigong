//导航效果
//导航条滚动效果
$(function(){
   $("#nav li").hover(function(){
		$(this).find(".jnNav").slideDown(300);
	},function(){
		$(this).find(".jnNav").slideUp(300);
	});
})
