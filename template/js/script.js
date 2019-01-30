
function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function(){
$('.cont').click(function() {
  $('.nnn').toggleClass("amenuafe");
});
});




$(document).ready(function(){
$('.overlayss').hover(function() {
  $(this).toggleClass("overlay");
});
});




$(document).ready(function(){
$('.overlayss').hover(function() {
  $(this).next('.hovers').toggleClass("hoversss");
});
});



$(document).ready(function(){
$('.overlayss').hover(function() {
  $(this).next('.hovers').toggleClass("trim");
});
});




$(document).ready(function(){
$('.overlayss').hover(function() {
  $(this).toggleClass("lupas");
});
});







$(document).ready(function(){

    $('.overlayss').click(function(){
        $('.netflix').find('.modal').css({"display":"block"});
        $('.modalil').attr("src", $(this).prev('.imgModal').attr("src"));
    });

     $('.modal').click(function(){
     $('.modal').css({"display":"none"});
    });

});






$(document).ready(function(){
      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
                  $('nav').find('img').attr("src" , "images/logoo.png");
            }

            else {
                  $('nav').removeClass('black');
                  $('nav').find('img').attr("src" , "images/logo.png");
            }
      })
});









$(document).ready(function (){
$(".animi").click(function() {
  $("html, body").animate({ scrollTop: "850vh" }, "slow");
  return false;
});
   
});








$(document).ready(function() {

   
loop();       
    });



function loop(){$( ".gndik" ).animate({
    marginTop: 30,
    opacity:0,
  }, 1000, function() {
 	
  },);
$( ".gndik" ).animate({
	marginTop: 8,

},400);
$( ".gndik" ).animate({
	opacity:1,

});
loop();
}







$(document).ready(function() {


       $('.textch').children('h2').animate({	
     	marginTop: 0,
     	opacity:1

     },500, function(){
     	    $('.textch').children('h1').animate({
     	
     	marginTop: 0,
     	opacity: 1
     },500, function(){



     $('.textch').children('p').animate({
     	
     	marginTop: 0,
     	opacity: 1
     },500,function(){
     	  $('.textch').children('.leo').animate({
     	
     	marginTop: 0,
     	opacity: 1
     },500); 
     });

     });

     });
     
       });

$(document).ready(function() {
$('.carousel').carousel({
        pause: 'none'
    });
     });






 $(document).ready(function(){

    $('.stoppp').click(function(){
        $('.net').find('.modal').css({"display":"block"});
 $('#vid').css({"display":"block"});

    });


 $('.modal').click(function(){
$('#vid').css({"display":"none"});

 $('#vid')[0].pause();
    });

  
});
