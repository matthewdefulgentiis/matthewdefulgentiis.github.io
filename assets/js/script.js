$(document).ready(function() {



  $("#thumbnaildescartes").click(function() {
    console.log("clicked");
    $("#overlay").show();
    $(this).addClass("pic-click");
  });
  
  $("#overlay").click(function() {
    $(this).hide();
    $("#thumbnaildescartes").removeClass("pic-click");
  })

   $("#thumbnailhume").click(function() {
    console.log("clicked");
    $("#overlay").show();
    $(this).addClass("pic-click");
  });
  
  $("#overlay").click(function() {
    $(this).hide();
    $("#thumbnailhume").removeClass("pic-click");
  })


  $('#sidebar-button').click(function() {
    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');    
    } else {
      $('#sidebar-button').addClass('button-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
        }, 300);
    }
  });



  $(".page-wrapper").click(function() {
    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active'); 
    }    
  });

  $("#carousel-next").click(function(){
    var crrVal = parseInt($('#carousel').css('margin-left').replace("px", "")) 

    if (crrVal == -3840) {
      return false;
    }
     
    else {
      $("#carousel").css('margin-left', crrVal - 960)
    }
  });


  $("#carousel-prev").click(function(){
    var crrVal = parseInt($('#carousel').css('margin-left').replace("px", "")) 

    if (crrVal == 0) {
      return false;
    }
     
    else {
      $("#carousel").css('margin-left', crrVal + 960)
    }
  });



//     (When the user clicks on an anchor tag)
// remove the no scroll class on the body
// animate the html and body tags using the above function
// Do the following code after a delay of 0.3 seconds:
// Remove the active class from the sidebar container
// Remove the active class from the sidebar button
// Remove the active class from the page wrapper
// return false


    // $(".sidebar-item").click(function() {
    //   $('body').removeClass('no-scroll');
    //   $('html, body').animate({
    //   scrollTop: $( $.attr(this, 'href')).offset().top
    //   }, 300);
    //   $('.sidebar-container').removeClass('sidebar-active');
    //   $('.sidebar-button').removeClass('sidebar-active');
    //   $('.page-wrapper').removeClass('page-active');
    //   return false;
    // });
    

   

  


   // $(button).click(function() {
   //  $(modal).show();
   // })



  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});