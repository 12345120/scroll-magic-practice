const scrollmagic = require("scrollmagic");

const controller = new scrollmagic.Controller();

const scene = new scrollmagic.Scene({
  triggerElement: ".card",
  duration: 100,
  triggerHook: 0,
})
  .setClassToggle(".card", "show")
  .addIndicators()
  .addTo(controller);
