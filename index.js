// Detecting Button Press

for(var i=0; i<(document.querySelectorAll(".drum").length); i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  /*
  switch (buttonInnerHTML) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

          case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;

              case "j":
              var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

                case "k":
                var crash = new Audio("sounds/crash.mp3");
                  crash.play();
                  break;

                case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                  kick.play();
                  break;

    default: console.log();

  }

   */

  });// don't use handleClick() parenthesis here;

}
// Detecting Keyboard Press
 document.addEventListener("keypress",function(event){
   makeSound(event.key) ;

   buttonAnimation(event.key);
});

function makeSound (key) {

  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

          case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;

              case "j":
              var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

                case "k":
                var crash = new Audio("sounds/crash.mp3");
                  crash.play();
                  break;

                case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                  kick.play();
                  break;

    default: console.log();

  }

}

function buttonAnimation(currentKey) {
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}

//this.style.color="white"; changing color of current object using this object

//in JS, for constructor name , even in camelcase first letter has to be capitalized

/*
Constructor Example

function HouseKeeper(yearsOfExperience, name, cleaningReportaire){
this.yearsOfExperience = yearsOfExperience;
this.name = name;
this.cleaningReportaire = cleaningReportaire;
this.clean = function () {
alert("cleaning in progress...");
}
}

var houseKeeper1 = new HouseKeeper (9, "Tom", "Bedroom")
*/



/* document.querySelectorAll("button").addEventListener("click", handleClick);// don't use handleClick() parenthesis here;

function handleClick() {
  alert("I got clicked!");
} */

/* document.querySelector("button").addEventListener("click", function  {
  alert("I got clicked!");
});

Anonymous funtion

 */
 /*    var audio = new Audio("sounds/tom-1.mp3");
     audio.play(); */
