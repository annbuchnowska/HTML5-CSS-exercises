$(document).ready(function(){
	$('.btn').click(function(){
		$(this).children('i')
		.toggleClass('fa-pause-circle-o')
		.toggleClass('fa-play-circle-o');
	})
})