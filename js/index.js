import Controls from "./controls.js";
import Sound from "./sounds.js";
import Events from "./events.js";
import TimerSetup from "./timer.js";

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
  modeToggle,
  modeBtnText,
  modeBtnIcon,
  natureVolume,
  natureCard,
  rainCard,
  rainVolume,
  cafeCard,
  cafeVolume,
  fireplaceCard,
  fireVolume,
} from "./elements.js";

const sound = Sound();

const controls = Controls({
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
});

const timer = TimerSetup({
  secondDisplay,
  minuteDisplay,
});

const events = Events({
  controls,
  sound,
  timer,
});

