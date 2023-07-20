import Sound from "./sounds.js";

export default function TimerSetup({
  secondDisplay,
  minuteDisplay,
}) {

  let timeOut;
  const SIXTY_SECONDS = 60;
  const ONE_SECOND = 1;
  const TEN_SECONDS = 10;
  const FIVE_MINUTES_IN_SECONDS = 300;
  const DEFAULT_MINUTE = "25";
  const DEFAULT_SECOND = "00";
  const MILI_SECONDS = 1000;

  function timerStart() {
    let timeInSecondsUpdated = timerInSeconds();

    timeOut = setTimeout(function () {
      timeInSecondsUpdated = timeInSecondsUpdated - ONE_SECOND;
      const minutesUpdated = Math.floor(timeInSecondsUpdated / SIXTY_SECONDS);
      const secondsUpdated = timeInSecondsUpdated % SIXTY_SECONDS;

      secondDisplay.textContent =
        secondsUpdated < TEN_SECONDS ? `0${secondsUpdated}` : secondsUpdated;
      minuteDisplay.textContent =
        minutesUpdated < TEN_SECONDS ? `0${minutesUpdated}` : minutesUpdated;

      timeInSecondsUpdated > 0 ? timerStart() : isFinished();
    }, MILI_SECONDS);
  }

  function isFinished() {
    Sound().timeEnd();
  }

  function timerPause() {
    clearTimeout(timeOut);
  }

  function timerInSeconds() {
    const minutes = minuteDisplay.textContent;
    const seconds = secondDisplay.textContent;

    const minutesInSeconds = Number(minutes) * SIXTY_SECONDS;
    const totalTimeInSeconds = minutesInSeconds + Number(seconds);

    return totalTimeInSeconds;
  }

  function timerStop() {
    clearTimeout(timeOut);
    minuteDisplay.textContent = DEFAULT_MINUTE;
    secondDisplay.textContent = DEFAULT_SECOND;
  }

  function addFiveMinutes() {
    clearTimeout(timeOut);

    let actualTime = timerInSeconds();

    const plusFiveMinutes = actualTime + FIVE_MINUTES_IN_SECONDS;

    const actualTimeInMinutes = Math.floor(plusFiveMinutes / SIXTY_SECONDS);

    minuteDisplay.textContent =
      actualTimeInMinutes < TEN_SECONDS
        ? `0${actualTimeInMinutes}`
        : actualTimeInMinutes;
  }

  function lessFiveMinutes() {
    clearTimeout(timeOut);

    let actualTime = timerInSeconds();
    const lessFiveMinutes = actualTime - FIVE_MINUTES_IN_SECONDS;

    const actualTimeInMinutes = Math.floor(lessFiveMinutes / SIXTY_SECONDS);

    if (actualTimeInMinutes <= 0) {
      return alert("Are you sure there is enough time? Let's add more time 😉");
    } else {
      minuteDisplay.textContent =
        actualTimeInMinutes < TEN_SECONDS
          ? `0${actualTimeInMinutes}`
          : actualTimeInMinutes;
    }
  }

  return {
    timerStart,
    timerStop,
    addFiveMinutes,
    lessFiveMinutes,
    timerPause,
  };
}
