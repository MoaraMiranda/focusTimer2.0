import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
  buttonNatureSound,
  buttonRainSound,
  buttonCafeSound,
  buttonFireplaceSound,
  modeToggle,
  modeBtnText,
  modeBtnIcon,
} from "./elements.js";

export default function Events({ controls, sound, timer }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.timerStart();
  });

  buttonPause.addEventListener("click", function () {
    controls.pauseOrStop();
    timer.timerPause();
  });

  buttonStop.addEventListener("click", function () {
    controls.pauseOrStop();
    timer.timerStop();
    sound.stopSounds();
  });

  buttonTimeUp.addEventListener("click", function () {
    timer.addFiveMinutes();
    controls.pauseOrStop();
  });

  buttonTimeDown.addEventListener("click", function () {
    timer.lessFiveMinutes();
    controls.pauseOrStop();
  });

  buttonNatureSound.addEventListener("click", function () {
    sound.pressNatureButton();
    controls.natureCardSelected();
  });

  buttonRainSound.addEventListener("click", function () {
    sound.pressRainButton();
    controls.rainCardSelected();
  });

  buttonCafeSound.addEventListener("click", function () {
    sound.pressCafeButton();
    controls.cafeCardSelected();
  });

  buttonFireplaceSound.addEventListener("click", function () {
    sound.pressFireButton();
    controls.fireCardSelected();
  });

  modeToggle.addEventListener("click", function () {
    const bodyClassList = document.body.classList;

    bodyClassList.toggle("dark-mode");

    if (bodyClassList.contains("dark-mode")) {
      modeBtnIcon.src = "assets/lightIcon.png";
      modeBtnText.innerHTML = "Light";
    } else {
      modeBtnIcon.src = "assets/darkIcon.png";
      modeBtnText.innerHTML = "Dark";
    }
  });
}
