
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});

});

$(function () {
	$(".header__btn").on("click", function () {
		$(".rightside-menu").removeClass("rightside-menu--close");
	});
	$(".rightside-menu__close").on("click", function () {
		$(".rightside-menu").addClass("rightside-menu--close");
	});
})

$(function () {
	$(".header__btn-menu").on("click", function () {
		$(".menu").toggleClass("menu--open");
	});
	
})