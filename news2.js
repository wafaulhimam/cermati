// Start Appearing Newsletter
var w = $(window), d = $(document);
w.scroll(function() {
   if(w.scrollTop() + w.height() == d.height())
   {
      console.log("Bottom of the page");
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


