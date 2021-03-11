const sections = document.querySelectorAll(".parallaxParent");
let currentSection = 0;

const btnUp = document.querySelector("#button-up");
const btnDown = document.querySelector("#button-down");

const scrollEventHandler = (value) => {
  if (value > 0 && currentSection < sections.length - 1) {
    currentSection++;
  } else if (value < 0 && currentSection > 0) {
    currentSection--;
  }
  sections[currentSection].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

sections[currentSection].scrollIntoView({
  behavior: "smooth",
  block: "start",
});

document.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

document.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
  },
  { passive: false }
);

btnUp.addEventListener("click", () => {
  scrollEventHandler(-1);
});
btnDown.addEventListener("click", () => {
  scrollEventHandler(1);
});

var controller = new ScrollMagic.Controller({
  globalSceneOptions: { triggerHook: "onEnter", duration: "200%" },
});

// build scenes
new ScrollMagic.Scene({ triggerElement: "#parallax1" })
  .setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#parallax2" })
  .setTween("#parallax2 > div", { y: "80%", ease: Linear.easeNone })
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: "#parallax3" })
  .setTween("#parallax3 > div", { y: "80%", ease: Linear.easeNone })
  .addTo(controller);

const triggers = document.querySelectorAll(".section-trigger");

triggers.forEach((item) => {
  new ScrollMagic.Scene({
    triggerElement: `#${item.getAttribute("id")}`,
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: 0, // hide 10% before exiting view (80% + 10% from bottom)
    offset: 10, // move trigger to center of element
  })
    .setClassToggle(`#${item.getAttribute("id")} + div`, "visible") // add class to reveal
    .addTo(controller);
});
