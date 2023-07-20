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
  natureVolume,
  rainVolume,
  cafeVolume,
  fireVolume
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
    controls.setPositionVolume();
    sound.setVolume();
  });

  buttonRainSound.addEventListener("click", function () {
    sound.pressRainButton();
    controls.rainCardSelected();
    controls.setPositionVolume();
    sound.setVolume();
  });

  buttonCafeSound.addEventListener("click", function () {
    sound.pressCafeButton();
    controls.cafeCardSelected();
    controls.setPositionVolume();
    sound.setVolume();
  });

  buttonFireplaceSound.addEventListener("click", function () {
    sound.pressFireButton();
    controls.fireCardSelected();
  });

  natureVolume.addEventListener("change", function (event) {
    sound.setVolume(natureVolume.value);
  });

  rainVolume.addEventListener("change", function (event) {
    sound.setVolume(rainVolume.value);
  });

  cafeVolume.addEventListener("change", function (event) {
    sound.setVolume(cafeVolume.value);
  });

  fireVolume.addEventListener("change", function (event) {
    sound.setVolume(fireVolume.value);
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
