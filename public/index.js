const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".card",
  duration: 100,
  triggerHook: 0,
})
  .setClassToggle(".card", "show")
  .addIndicators()
  .addTo(controller);
