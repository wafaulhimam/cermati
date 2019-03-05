// Start Closing Notification Panel
$(document).ready(function(){
  $("#buttonnotif").click(function(){
    $("#notification").slideUp();
  });
});
// End Closing Notification Panel

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
var notifHidden = localStorage.getItem('hidden') ? localStorage.getItem('hidden') : false;
var timePast = localStorage.getItem('newsletter');
var intervalDate;

let checkDate = () => {
  let timeNow = new Date().getTime();
  let diff = Math.round((timeNow - timePast) / 60000);
  if(notifHidden && diff >= 10){
    notif.style.display="block";
    localStorage.setItem('hidden',false);
    clearInterval(intervalDate);
  }
}

let intervalCheck = () =>{
  clearInterval(intervalDate);
  intervalDate = setInterval(() => {
    checkDate();
  }, 1000);
}

let checkNotif = () => {
  if(notifHidden){
    notif.style.display="none";
    intervalCheck();
  }
}

checkNotif();

notif.onclick = () => {
  let timeNow = new Date().getTime();
  notif.style.display="none";
  notifHidden = true;
  timePast = timeNow;
  localStorage.setItem('hidden',true);
  localStorage.setItem('newsletter',timeNow);
  intervalCheck();
}
// End Localstorage and Setinterval 10 minutes

