// const scrollmagic = require("scrollmagic");

const controller = new sm.Controller();

const scene = new sm.Scene({
  triggerElement: ".card",
  duration: 100,
  triggerHook: 0,
})
  .setClassToggle(".card", "show")
  .addIndicators()
  .addTo(controller);
