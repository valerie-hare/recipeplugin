/*jQuery plugin that highlights recipe ingredients with yellow background
and changes text color to dark blue for ingredient text*/
/*Place plugin in a function so other jQuery functions can't override it*/
/* Chained two functions to the li.ingredients elements to reduce code */
(function ( $ ) {
  $.fn.highlight = function() {
    this.css("background-color", "#fff9c0");
    return this;
  };
  $.fn.colorify = function() {
    this.css("color", "#154360");
    return this;
  };
  $( "li.ingredients" ).highlight().colorify();
} ( jQuery ));
