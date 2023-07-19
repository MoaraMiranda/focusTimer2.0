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
} from "./elements.js";

import {
  SIXTY_SECONDS,
  ONE_SECOND,
  TEN_SECONDS,
  FIVE_MINUTES_IN_SECONDS,
  DEFAULT_MINUTE,
  DEFAULT_SECOND,
} from "./helper.js";

const sound = Sound();

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

const timer = TimerSetup({
  secondDisplay,
  minuteDisplay,
  ONE_SECOND,
  SIXTY_SECONDS,
  TEN_SECONDS,
  DEFAULT_MINUTE,
  DEFAULT_SECOND,
  FIVE_MINUTES_IN_SECONDS,
});

const events = Events({
  controls,
  sound,
  timer,
});
