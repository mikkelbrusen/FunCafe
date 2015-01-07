// Load Script when document is rdy
$(document).ready(function() { 

	// Function to change header on scroll 
	$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
	    $('header').addClass("sticky");
	  }
	  else{
	    $('header').removeClass("sticky");
	  }
	});
	// **************************************************************


});
		