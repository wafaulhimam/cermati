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

// Start Localstorage and Setinterval 10 minutes
var notif = document.getElementById('newsletter');
var notifHidden = false;
var intervalDate;

checkDate = () => {
  var timeNow = new Date();
  var timeNowMinutes = timeNow.getMinutes();
  var timePast = localStorage.getItem('date');
  var diff = timeNowMinutes - timePast;
  console.log(diff)
  if(notifHidden && diff >= 10 ){
     console.log('ea')
     notif.style.display = "block";
     notifHidden = !notifHidden;
     clearInterval(intervalDate);
  }
}

notif.onclick = () => {
  var time = new Date();
  notif.style.display = "none";
  localStorage.setItem('date', time.getMinutes())
  notifHidden = !notifHidden;
  intervalDate = setInterval(() => {
    checkDate();
  }, 1000)
}

// End Localstorage and Setinterval 10 minutes

