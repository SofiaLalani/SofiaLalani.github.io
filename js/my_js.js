$( ".click" ).click(function() {
  $( ".display" ).show( "slow" );
	$('html, body').animate({
        scrollTop: $(".display").offset().top
    }, 2000);
});

$( ".click" ).click(function() {
  $( ".display" ).hide( 20000 );
});
