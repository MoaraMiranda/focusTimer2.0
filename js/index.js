import Controls from "./controls.js"

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonTimeUp,
  buttonTimeDown,
});



//events


buttonPlay.addEventListener("click", function () {
  controls.play();
});

buttonPause.addEventListener("click", function () {
  controls.pause();
});



