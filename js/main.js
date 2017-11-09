$(document).ready(function(){
    $(".boxy-nav-icon").click(function(){
    

    $('#nav').fadeToggle(300,"linear",function(){
    	if($('#nav').is(':visible') === true){
    		$('#navicon').removeClass('fa-th-large');
    		$('#navicon').addClass('fa-times');
    		$('#navicon').addClass('fa-3x');
    	}
    	else{
    		$('#navicon').addClass('fa-th-large');
    		$('#navicon').removeClass('fa-times');
    		
    	}
    });
    });

    $('#for-resume').click(function(event) {
    
    	$('body > section').css("display","none");
    	$('body > section#resume').css("display","block");
	$('#nav').fadeToggle(200);
    	$('#navicon').addClass('fa-th-large');
    	$('#navicon').removeClass('fa-times');
    	    });

    $('#for-ud').click(function(event) {
        $('body > section').css("display","none");
        $('body > section#ud').css("display","block");
    $('#nav').fadeToggle(200);
        $('#navicon').addClass('fa-th-large');
        $('#navicon').removeClass('fa-times');
            });
    $('#for-contact').click(function(event) {
        $('body > section').css("display","none");
        $('body > section#contact-me').css("display","block");
    $('#nav').fadeToggle(200);
        $('#navicon').addClass('fa-th-large');
        $('#navicon').removeClass('fa-times');
            });
    $('#for-projects').click(function(event) {
        $('body > section').css("display","none");
        $('body > section#projects').css("display","block");
    $('#nav').fadeToggle(200);
        $('#navicon').addClass('fa-th-large');
        $('#navicon').removeClass('fa-times');
            });
});


