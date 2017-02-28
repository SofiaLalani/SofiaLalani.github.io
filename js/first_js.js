$( document ).ready(function() {
    console.log( "ready!" );
});

		
	
$(".sf").click(function() {
    $('html, body').animate({
        scrollTop: $(".container3").offset().top
    }, 2000);
});



$(".about").click(function() {
    $('p').addClass("clickhover")
      
});

      

