(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      Materialize.toast('I am a toast!', 4000)
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space