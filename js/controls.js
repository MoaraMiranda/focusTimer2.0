export default function Controls({
  buttonPlay,
  buttonPause,
  buttonNatureSound,
  buttonRainSound,
  buttonCafeSound,
  buttonFireplaceSound,
  natureIcon,
  rainIcon,
  cafeIcon,
  fireIcon,
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }

  function pauseOrStop() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

  function natureCardSelected() {
    removeAllClassSelected();
    buttonNatureSound.classList.add("selected");
    natureIcon.classList.add("svg-selected");
  }

  function rainCardSelected() {
    removeAllClassSelected();
    buttonRainSound.classList.add("selected");
    rainIcon.classList.add("svg-selected");
  }

  function cafeCardSelected() {
    removeAllClassSelected();
    buttonCafeSound.classList.add("selected");
    cafeIcon.classList.add("svg-selected")
  }

  function fireCardSelected() {
    removeAllClassSelected();
    buttonFireplaceSound.classList.add("selected");
    fireIcon.classList.add("svg-selected");

  }

  function removeAllClassSelected() {
    buttonNatureSound.classList.remove("selected");
    natureIcon.classList.remove("svg-selected");
    buttonRainSound.classList.remove("selected");
    rainIcon.classList.remove("svg-selected");
    buttonCafeSound.classList.remove("selected");
    cafeIcon.classList.remove("svg-selected");
    buttonFireplaceSound.classList.remove("selected");
    fireIcon.classList.remove("svg-selected");
  }

  return {
    play,
    pauseOrStop,
    rainCardSelected,
    natureCardSelected,
    cafeCardSelected,
    fireCardSelected,
  };
}
