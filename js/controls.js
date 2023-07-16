export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
}) {
  function play() {
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
  }

  function pauseOrStop() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  }

  
  return {
    play,
    pauseOrStop,
  };
}

