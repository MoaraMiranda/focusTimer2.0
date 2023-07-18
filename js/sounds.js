export default function Sound() {
  const natureAudio = new Audio("audios/nature.wav");
  const rainAudio = new Audio("audios/rain.wav");
  const cafeteriaAudio = new Audio("audios/cafeteria.wav");
  const fireplaceAudio = new Audio("audios/fireplace.wav");

  let isPlaying = "";

  function pauseAll() {
    natureAudio.pause();
    rainAudio.pause();
    cafeteriaAudio.pause();
    fireplaceAudio.pause();
  }

  function pressNatureButton() {
    pauseAll();
    if (isPlaying != "nature") {
      isPlaying = "nature";
      natureAudio.play();
      natureAudio.loop = true;
    } else {
      isPlaying = "";
    }
  }

  function pressRainButton() {
    pauseAll();
    if (isPlaying != "rain") {
      isPlaying = "rain";
      rainAudio.play();
      rainAudio.loop = true;
    } else {
      isPlaying = "";
    }
  }

  function pressCafeButton() {
    pauseAll();
    if (isPlaying != "cafeteria") {
      isPlaying = "cafeteria";
      cafeteriaAudio.play();
      cafeteriaAudio.loop = true;
    } else {
      isPlaying = "";
    }
  }

  function pressFireButton() {
    pauseAll();
    if (isPlaying != "fireplace") {
      isPlaying = "fireplace";
      fireplaceAudio.play();
      fireplaceAudio.loop = true;
    } else {
      isPlaying = "";
    }
  }
  return {
    pressNatureButton,
    pressRainButton,
    pressCafeButton,
    pressFireButton,
  };
}
