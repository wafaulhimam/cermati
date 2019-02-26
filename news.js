var w = $(window), d = $(document);
w.scroll(function() {
   if(w.scrollTop() + w.height() == d.height())
   {
      console.log("You have hit the bottom!");
      alert("End")
   } 
});