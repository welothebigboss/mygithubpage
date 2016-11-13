(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    
    $("#toast").click(function () {
    	var nameValue = $("#last_name").val();
		var textValue = $("#textarea1").val();
		var subjectValue = $("#subjectText").val();
    	if((textValue.length > 0) && (subjectValue.length > 0) && (nameValue.length > 0))
    	{
    		var $toastContent = 'A sua mensagem foi enviada!';
    	  	Materialize.toast($toastContent, 4000)
    	}

    });

  }); // end of document ready
})(jQuery); // end of jQuery name space