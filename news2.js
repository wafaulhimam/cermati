var w = $(window), d = $(document);
w.scroll(function() {
   if(w.scrollTop() + w.height() == d.height())
   {
      console.log("Bottom of the page");
      document.getElementById("newsletter").className = "slideUp";
   } 
});

// ===== Scroll to Top ==== 
var w = $(window), d = $(document);
w.scroll(function() {
   if(w.scrollTop() + w.height() == d.height())
 {        // If page is scrolled more than 50px
       $('#return-to-top').fadeIn(200);    // Fade in the arrow
   } else {
       $('#return-to-top').fadeOut(200);   // Else fade out the arrow
   }
});
$('#return-to-top').click(function() {      // When arrow is clicked
   $('body,html').animate({
       scrollTop : 0                       // Scroll to top of body
   }, 500);
});