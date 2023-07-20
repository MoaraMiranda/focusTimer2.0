
export default function Sound() {
  const natureAudio = new Audio("audios/nature.wav");
  const rainAudio = new Audio("audios/rain.wav");
  const cafeteriaAudio = new Audio("audios/cafeteria.wav");
  const fireplaceAudio = new Audio("audios/fireplace.wav");
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

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

  function stopSounds() {
    natureAudio.pause();
    rainAudio.pause();
    cafeteriaAudio.pause();
    fireplaceAudio.pause();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  function setVolume(value = 50) {
    const volume = value / 100;
    natureAudio.volume = volume;
    rainAudio.volume = volume;
    cafeteriaAudio.volume = volume;
    fireplaceAudio.volume = volume;
  }
  return {
    pressNatureButton,
    pressRainButton,
    pressCafeButton,
    pressFireButton,
    stopSounds,
    timeEnd,
    setVolume,
  };
}
