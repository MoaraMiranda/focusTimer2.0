export default function Controls({
  buttonPlay,
  buttonPause,
  natureCard,
  rainCard,
  cafeCard,
  fireplaceCard,
  natureIcon,
  rainIcon,
  cafeIcon,
  fireIcon,
  natureVolume,
  rainVolume,
  cafeVolume,
  fireVolume,
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }

  function pauseOrStop() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    removeAllClassSelected();
  }

  function natureCardSelected() {
    removeAllClassSelected();
    natureCard.classList.add("selected");
    natureIcon.classList.add("svg-selected");
    natureVolume.classList.add("range-selected");
  }

  function rainCardSelected() {
    removeAllClassSelected();
    rainCard.classList.add("selected");
    rainIcon.classList.add("svg-selected");
    rainVolume.classList.add("range-selected");
  }

  function cafeCardSelected() {
    removeAllClassSelected();
    cafeCard.classList.add("selected");
    cafeIcon.classList.add("svg-selected");
    cafeVolume.classList.add("range-selected");
  }

  function fireCardSelected() {
    removeAllClassSelected();
    fireplaceCard.classList.add("selected");
    fireIcon.classList.add("svg-selected");
    fireVolume.classList.add("range-selected");
  }

  function removeAllClassSelected() {
    natureCard.classList.remove("selected");
    natureIcon.classList.remove("svg-selected");
    rainCard.classList.remove("selected");
    rainIcon.classList.remove("svg-selected");
    cafeCard.classList.remove("selected");
    cafeIcon.classList.remove("svg-selected");
    fireplaceCard.classList.remove("selected");
    fireIcon.classList.remove("svg-selected");
    natureVolume.classList.remove("range-selected");
    rainVolume.classList.remove("range-selected");
    cafeVolume.classList.remove("range-selected");
    fireVolume.classList.remove("range-selected");
  }

  function setPositionVolume() {
    const defaultVolume = 50;
    natureVolume.value = defaultVolume;
    rainVolume.value = defaultVolume;
    cafeVolume.value = defaultVolume;
    fireVolume.value = defaultVolume;
  }

  return {
    play,
    pauseOrStop,
    rainCardSelected,
    natureCardSelected,
    cafeCardSelected,
    fireCardSelected,
    setPositionVolume,
  };
}
