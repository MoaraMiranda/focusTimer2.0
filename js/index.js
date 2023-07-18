import Controls from "./controls.js";
import Sound from "./sounds.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
  minuteDisplay,
  secondDisplay,
  buttonNatureSound,
  buttonRainSound,
  buttonCafeSound,
  buttonFireplaceSound,
  natureIcon,
  rainIcon,
  cafeIcon,
  fireIcon,
} from "./elements.js";

import {
  SIXTY_SECONDS,
  ONE_SECOND,
  TEN_SECONDS,
  FIVE_MINUTES_IN_SECONDS,
  DEFAULT_MINUTE,
  DEFAULT_SECOND,
} from "./helper.js";
//Variables for import

const controls = Controls({
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
});

const sound = Sound();
let timeOut;

function timerStart() {
  let timeInSecondsUpdated = timerInSeconds();

  timeOut = setTimeout(function () {
    // depois de 1 segundo entra aqui

    timeInSecondsUpdated = timeInSecondsUpdated - ONE_SECOND; // 69
    const minutesUpdated = Math.floor(timeInSecondsUpdated / SIXTY_SECONDS); //1
    const secondsUpdated = timeInSecondsUpdated % SIXTY_SECONDS; // 09

    secondDisplay.textContent =
      secondsUpdated < TEN_SECONDS ? `0${secondsUpdated}` : secondsUpdated;
    minuteDisplay.textContent =
      minutesUpdated < TEN_SECONDS ? `0${minutesUpdated}` : minutesUpdated; //se < 10 + 0 na frente

    if (timeInSecondsUpdated > 0) {
      timerStart();
    }
  }, 1000); // passa aqui primeiro
}

function timerInSeconds() {
  const minutes = minuteDisplay.textContent; // 1
  const seconds = secondDisplay.textContent; // 10

  const minutesInSeconds = Number(minutes) * SIXTY_SECONDS; // 60
  const totalTimeInSeconds = minutesInSeconds + Number(seconds); // 60 + 10 =70

  return totalTimeInSeconds;
}

function timerStop() {
  clearTimeout(timeOut);
  minuteDisplay.textContent = DEFAULT_MINUTE;
  secondDisplay.textContent = DEFAULT_SECOND;
}

function addFiveMinutes() {
  let actualTime = timerInSeconds();

  const plusFiveMinutes = actualTime + FIVE_MINUTES_IN_SECONDS;

  const actualTimeInMinutes = Math.floor(plusFiveMinutes / SIXTY_SECONDS);

  minuteDisplay.textContent =
    actualTimeInMinutes < TEN_SECONDS
      ? `0${actualTimeInMinutes}`
      : actualTimeInMinutes;
}

function lessFiveMinutes() {
  let actualTime = timerInSeconds();
  const lessFiveMinutes = actualTime - FIVE_MINUTES_IN_SECONDS;

  const actualTimeInMinutes = Math.floor(lessFiveMinutes / SIXTY_SECONDS);

  minuteDisplay.textContent =
    actualTimeInMinutes < TEN_SECONDS
      ? `0${actualTimeInMinutes}`
      : actualTimeInMinutes;
}
//events

buttonPlay.addEventListener("click", function () {
  controls.play();
  timerStart();
});

buttonPause.addEventListener("click", function () {
  controls.pauseOrStop();
  clearTimeout(timeOut);
});

buttonStop.addEventListener("click", function () {
  controls.pauseOrStop();
  timerStop();
});

buttonTimeUp.addEventListener("click", function () {
  clearTimeout(timeOut);
  addFiveMinutes();
  controls.pauseOrStop();
});

buttonTimeDown.addEventListener("click", function () {
  clearTimeout(timeOut);
  lessFiveMinutes();
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
