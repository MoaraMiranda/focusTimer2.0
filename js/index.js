import Controls from "./controls.js";
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
  minuteDisplay,
  secondDisplay,
} from "./elements.js";

//Variables for import

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
});

const SIXTY_SECONDS = 60;
const ONE_SECOND = 1;
const TEN_SECONDS = 10;
const DEFAULT_MINUTE = "25";
const DEFAULT_SECOND = "00";
let timeOut;

function timerStart() {
  const minutes = minuteDisplay.textContent; // 1
  const seconds = secondDisplay.textContent; // 10

  const minutesInSeconds = Number(minutes) * SIXTY_SECONDS; // 60
  const totalTimeInSeconds = minutesInSeconds + Number(seconds); // 60 + 10 =70
  timeOut = setTimeout(function () {
    // depois de 1 segundo entra aqui

    const timeInSecondsUpdated = totalTimeInSeconds - ONE_SECOND; // 69
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

function timerStop() {
  clearTimeout(timeOut);

}

//events

buttonPlay.addEventListener("click", function () {
  controls.play();
  timerStart();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
});

buttonStop.addEventListener("click", function () {
  controls.pauseOrStop();
  timerStop();
});
