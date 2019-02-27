// Start Appearing Newsletter
$(window).scroll(function() {
   if ($(this).scrollTop() >= 600) {
      console.log("You hit one-thid of the page");
      document.getElementById("newsletter").className = "slideUp";
   } 
});
// End Appearing Newsletter

// Start Closing Newsletter
$(document).ready(function(){
   $("#buttonnews").click(function(){
     $("#newsletter").slideUp();
   });
 });
//  End Closing Newsletter


