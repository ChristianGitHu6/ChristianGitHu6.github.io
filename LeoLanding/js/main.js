

  $(document).ready(function() {
         $(".menu-toggle").on("click", function() {
                  $("#menu ul").toggleClass("showing");
          });
   });





  $(document).ready(function() {
      $img = $('#content .row img');
      $text = $('.tabs div');
    
      $img.click(function($this){
      	$imgchild = $(this);
      	$imgclass = $(this).attr('class');


		$('.item').removeClass('fontweight');
		$(this).parent().addClass('fontweight');



		$('.item').removeClass('border');
		$(this).parent().addClass('border');

      

      	$text.each(function($this){
      		if($(this).attr('class') == $imgclass){
      			$text.css("display","none");
      			$(this).css("display","block");
      			

      		}
      		
      	});


      });

   });


