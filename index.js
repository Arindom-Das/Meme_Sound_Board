function playAudio(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key   = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    //checks if the  audio  element exists. 
    if (!audio) return; 

    // If it doesn't exist, the code will exit the current function or block and not execute any further code. 
    // If (audio) return;  checks if the  audio  element exists. 
    // If it does exist, the code will exit the current function or block and not execute any further code.
    
    key.classList.add('playing');
    audio.currentTime = 0; 
    // rewind to the start 
    audio.play();
  }

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; 
    //skip it if its not a transform
    this.classList.remove('playing'); 
    //this is the key on which we have the eventListener
  }

const keys = document.querySelectorAll('.key'); 
//we need to select every single key on the page to listen for the transitionend event on each one.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playAudio);