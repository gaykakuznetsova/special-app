$(document).ready(function() {
	$('.header-burger').click(function(){
        $('.header-burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        });
});