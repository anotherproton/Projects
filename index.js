//For detecting Clicks

for(var i = 0; i<document.querySelectorAll(".drum").length; i++){ //TO ITERATE OVER EVERY BUTTON TO ADD EVENT LISTENER
document.querySelectorAll("button")[i].addEventListener("click", function(){ // ADDIND EVENT LISTENER
  var buttonHTML = this.innerHTML; //COLLECTING THE BUTTON WHICH IS PRESSED BY USING this.innerHTML (w/a/s/d/j/k/l)
  makeSound(buttonHTML);  // SENDING THE DATA TO FUNCTION
  buttonAnimation(buttonHTML);
});
}

  document.addEventListener("keydown" , function(event) { //FOR COLLECTING THE KEY WHICH IS PRESSED
      makeSound(event.key); // EVENT.KEY TO COLLECT THE KEY VALUE AND SENDING IT TO THE FUNCTION
      buttonAnimation(event.key);
  });

// for detecting keypresses

    function makeSound(key){
      switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "l":
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
        break;

        default:
            console.log(ButtonHTML);
          }
    }

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
  activeButton.classList.remove("pressed");
  }, 100);

}
