var numberOfdrumButtons = document.querySelectorAll(".drum").length;

for (var i=0;i<numberOfdrumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {

  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

  });


}


document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "m":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
     break;

    case "r":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
     break;

    case "i":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
     break;

    case "y":
    var audio=new Audio("sounds/kick.mp3");
    audio.play();
     break;

    case "a":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
     break;

    case "z":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
     break;

    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    default:
    console.log(key);

  }

}

function buttonAnimation(currentkey){

var activeButton=  document.querySelector("."+ currentkey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);

}
