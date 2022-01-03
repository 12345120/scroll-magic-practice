const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".body",
  // duration: 30,
  triggerHook: 0.5,
})
  .setClassToggle(".card", "show")
  .addIndicators()
  .addTo(controller);

