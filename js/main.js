// Make it rain!<!doctype html>
$(document).ready(function(){

$(".toggle-nav").click(function() {
    toggleNav();
  });


  function toggleNav() {
if ($('#drawer').hasClass('show-nav')) {
		$('#drawer').removeClass('show-nav');
		$('#nav-icon').removeClass('open');
		$('#site-canvas').removeClass('slide');
		$("nav li.gotsMenus").removeClass("showSub");
} else {
		$('#drawer').addClass('show-nav');
 		$('#nav-icon').addClass('open');
 		$('#site-canvas').addClass('slide');
		$("nav li.gotsMenus").removeClass("showSub");
}
}
  $('#closeButton, #site-canvas, nav li li').click(function() {
  	  $('#drawer').removeClass('show-nav');
  	  $('#nav-icon').removeClass('open');
  	  $('#site-canvas').removeClass('slide');
  	  $("nav li.gotsMenus").removeClass("showSub");
});

     var header = $('#menuHeader');

  $("nav li.gotsMenus").mouseenter(function () {
 		if(header.is(":hidden")) {
		$(this).addClass("showSub");
}
});

  $("nav li.gotsMenus").mouseleave(function () {
 		if(header.is(":hidden")) {
  	$('nav li.gotsMenus').removeClass('showSub');
}
});



 // MAKE MOBILE MENU OPEN SUB MENU ON CLICK, GO TO PARENT LINK ON DOUBLE CLICK
// SINGLE CLICK FUNCTION

$("nav li.gotsMenus h3").on('click', function(e){
	if(header.is(":visible")) {
	e.preventDefault();
	e.stopPropagation();
		var theOne = $(this);
      	$("nav li.gotsMenus").not(theOne.parent()).removeClass("showSub");
      	theOne.parent().toggleClass("showSub");
	} else {
			e.preventDefault();
	e.stopPropagation();
			window.location = $(this).find("a").attr("href");
	}
});

// DOUBLE CLICK FUNCTION
$("nav li.gotsMenus h3").on('dblclick', function(e){
	e.preventDefault();
	window.location = $(this).find("a").attr("href");
});


 //Tap and double tap function for large touch screens
 /*
var tapped=false;
$("nav li.gotsMenus h3").on("tap", function(e){
	var theOne = $(this);
    if((!tapped)){
      tapped=setTimeout(function(){
      	e.preventDefault();
      	e.stopPropagation();

      	$("nav li.gotsMenus").not(theOne.parent()).removeClass("showSub");
      	theOne.parent().toggleClass("showSub");

          tapped=null;
      },300); //wait 300ms
    } else {
      clearTimeout(tapped);
      tapped=null;
       window.location = $(this).find("a").attr("href");
    }
    e.preventDefault();
});
*/
$("nav li.gotsMenus h3").on("touchstart", function(e){

      	e.preventDefault();
      	e.stopPropagation();
      	var theOne = $(this);
      	$("nav li.gotsMenus").not(theOne.parent()).removeClass("showSub");
      	theOne.parent().toggleClass("showSub");
});
/*
window.onhashchange = function(){
  	  $('#drawer').removeClass('show-nav');
  	  $('#nav-icon').removeClass('open');
  	  $("nav li.gotsMenus").removeClass("showSub");
};
*/

var senseSpeed = 5;
var previousScroll = 0;
$('#site-canvas').scroll(function(event){
   var scroller = $(this).scrollTop();
   if (scroller-senseSpeed > previousScroll){
      $("#menuHeader").addClass('hide');
   } else if (scroller+senseSpeed < previousScroll) {
      $("#menuHeader").removeClass('hide');
   }
   previousScroll = scroller;
});





});
