# Audio Player

This is a simple JavaScript code snippet that allows you to play audio files when specific keys are pressed. It also adds a visual effect to the corresponding key element.

## How to Use

1. Include the JavaScript code in your HTML file or script.
2. Make sure you have audio elements with the corresponding data-key attribute set to the key codes you want to trigger the audio.
3. Add HTML elements with the class "key" for each key you want to have the visual effect.
4. Ensure you have audio files available for each key code.
5. Run your HTML file or script.

## Code Explanation

The code consists of two JavaScript functions:

### playAudio(e)

- This function is triggered when a key is pressed.
- It selects the audio element and key element corresponding to the pressed key code.
- If the audio element does not exist, the function exits.
- It adds the class 'playing' to the key element to apply the visual effect.
- It rewinds the audio to the start using `audio.currentTime = 0`.
- It plays the audio using `audio.play()`.

### removeTransition(e)

- This function is triggered when a CSS transition ends.
- It checks if the property name of the transition is 'transform'.
- If not, it exits the function.
- Otherwise, it removes the class 'playing' from the key element, removing the visual effect.

The code also includes event listeners:

- It selects all elements with the class 'key' and adds an event listener for the 'transitionend' event on each one. This triggers the `removeTransition` function.
- It adds a global event listener for the 'keydown' event on the window, which triggers the `playAudio` function.

Feel free to modify and adapt the code according to your needs.
