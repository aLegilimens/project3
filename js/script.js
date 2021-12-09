/*
We needed to use at least : 
An Object.
A Function.
An Array.
A Variable.
An Event.
JQuery Animation.
If Statement.
Switch Statement.
For statement.
One of the content Panels.
*/

//function to change to dark mode
function darkMode(){
    var element = document.body;
    var card = document.getElementById("myCard");
    var modal = document.getElementById("messageModal");
    element.classList.toggle("dark-mode");
    card.classList.toggle("card-dark-mode");
    modal.classList.toggle("modal-dark");
}

var goToTop = document.getElementById("topB");

function goToTopFunc(){
    window.scrollTo(0,0);
}

//on event scroll, the 'top' button shows 
window.addEventListener("scroll", () =>{
    goToTop.classList.toggle("showTop", window.scrollY > 50);
});

//JS for the modal window

var modal = document.getElementById("messageModal");
var btnModal = document.getElementById("msg");
var span = document.getElementsByClassName("close")[0];

btnModal.onclick = function(){
    modal.style.display = "block";
    $("modal").animate({
        left: '250px',
        opacity: '0.9', 
        height: '150px',
        width: '150px'
    });
}

span.onclick = function(){
    modal.style.display = "none";
}


//example of using the switch statement!

const d = new Date();
var day = d.getDay();
var greetMsg = document.getElementById("greeting");

switch(day){
    case 1:
        greetMsg.innerHTML = "Today is Monday!";
        break;
    case 2:
        greetMsg.innerHTML = "Today is Tuesday!";
        break;
    case 3:
        greetMsg.innerHTML = "Today is Wednesday!";
        break;
    case 4:
        greetMsg.innerHTML = "Today is Thursday!";
        break;
    case 5:
        greetMsg.innerHTML = "Today is Friday!";
        break;
    case 6:
        greetMsg.innerHTML = "Today is Friday!";
        break;
    case 0:
        greetMsg.innerHTML = "Today is Sunday!";
        break;
}

//example of using the if statement
var hours = document.getElementById("hours");
var hour = d.getHours();
var message; 

if(hour>6 && hour<12){
    message = "Good morning!"
}
else if(hour>= 12 && hour < 18){
    message = "Good afternoon!";
}
else if(hour > 18){
    message = "Good evening!";
}
hours.innerHTML = message;

//example of using the array and for loop
//we put the content of message into an array character by character
var msg = [];
for(let i=0; i<message.length; i++){
    msg[i] = message.charAt(i);
}

//using the jQuery .animate()
$("#greeting" ).animate({
    width: "70%",
    opacity: 0.8,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 2000 );

$(document).ready(function () {
    $("#myCard").click(function () {
        $("#myCard").animate({
            height: "800px",
        }, 3000);
    });
});

$('#msg').click(function(){ 
    $( "#messageModal" ).animate({
        opacity: 1
      }, 1000 );
    });

