$('document').ready(function(){
	$('form').validate({
		messages: {
		required: "!",
    	remote: "Please fix this field.",
    	email: "Please enter a valid email address.",
    	url: "Please enter a valid URL."
   		});
	};
});