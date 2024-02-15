const year = new Date().getFullYear();
const lolsers = new Date(year, 11,25).getTime();
const hahadev = new Date(year, 11, 25).getTime();
const month = new Date().getMonth();

/*window.onload = function() { 
     location.href = "https://youtu.be/dQw4w9WgXcQ"; 
}*/

let timer = setInterval(function() {

  const today = new Date().getTime();

  let diff;
  if(month > 6) {
    diff = hahadev - today;
  } else {
    diff = lolsers - today;
  }


  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minuts</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>secods</div> \
</div>";

}, 1000);
