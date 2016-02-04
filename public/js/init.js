(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
 $('.button-collapse').sideNav({
      menuWidth: 150, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
new WOW().init();
$(document).ready(function(){
    $('.collapsible').collapsible({});
  });
 $(function() {
    $( "#pedidos" ).click(function() {
      $( "li" ).removeClass( "active" );
      $( "#pedidos" ).addClass( "active" );
      $("#productos-container").addClass("hide");
      $("#new-container").addClass("hide");
      $("#pedidos-container").removeClass("hide");
    });
    $( "#pedidos-nav" ).click(function() {
      $( "li" ).removeClass( "active" );
      $( "#pedidos" ).addClass( "active" );
      $( "#pedidos-nav" ).addClass( "active" );
      $("#productos-container").addClass("hide");
      $("#new-container").addClass("hide");
      $("#pedidos-container").removeClass("hide");
      $('.button-collapse').sideNav('hide');
    });
    $( "#productos" ).click(function() {
      $( "li" ).removeClass( "active" );
      $( "#productos" ).addClass( "active" );
      $("#pedidos-container").addClass("hide");
      $("#new-container").addClass("hide");
      $("#productos-container").removeClass("hide");
    });
    $( "#productos-nav" ).click(function() {
      $( "li" ).removeClass( "active" );
      $( "#productos" ).addClass( "active" );
      $( "#productos-nav" ).addClass( "active" );
      $("#pedidos-container").addClass("hide");
      $("#new-container").addClass("hide");
      $("#productos-container").removeClass("hide");
      $('.button-collapse').sideNav('hide');
    });
    $( "#new" ).click(function() {
      $("#pedidos-container").addClass("hide");
      $("#productos-container").addClass("hide");
      $("#new-container").removeClass("hide");
    });
  });