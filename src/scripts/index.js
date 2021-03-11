const sections = document.querySelectorAll(".parallaxParent");
let currentSection = 0;

const btnUp = document.querySelector("#button-up");
const btnDown = document.querySelector("#button-down");

sections[currentSection].scrollIntoView({
  behavior: "smooth",
  block: "start",
});

sections[currentSection].querySelector(".section-wrapper").classList.add("visible");
let delay = 0.8;

for (let i = 0; i < sections.length; i++) {
  const messages = sections[i].querySelectorAll(".message-wrapper");

  for (let j = 0; j < messages.length; j++) {
    messages[j].querySelector(".message").style.transitionDelay = `${delay}s`;
    delay++;
  }
  delay = 0.8;
}

const scrollEventHandler = (value) => {
  if (value > 0 && currentSection < sections.length - 1) {
    currentSection++;
    sections[currentSection - 1].querySelector(".section-wrapper").classList.remove("visible");
  } else if (value < 0 && currentSection > 0) {
    currentSection--;
    sections[currentSection + 1].querySelector(".section-wrapper").classList.remove("visible");
  }
  sections[currentSection].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  sections[currentSection].querySelector(".section-wrapper").classList.add("visible");
};

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

function pathPrepare($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $word = $("path#word");
var $dot = $("path#dot");

// prepare SVG
pathPrepare($word);
pathPrepare($dot);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
  .add(TweenMax.to($word, 0.9, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9
  .add(TweenMax.to($dot, 0.1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw dot for 0.1
  .add(TweenMax.to("path", 1, { stroke: "#33629c", ease: Linear.easeNone }), 0); // change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: "#word",
  duration: 200,
  tweenChanges: true,
})
  .setTween(tween)
  .addTo(controller);
