(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

    $("#toast").click(function () {
    	var $toastContent = 'A sua mensagem foi enviada!';
    	  Materialize.toast($toastContent, 4000) // 4000 is the duration of the toast
    	/* body... */
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space