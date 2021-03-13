const sections = document.querySelectorAll(".parallaxParent");
let currentSection = 0;

const btnUp = document.querySelector("#button-up");
const btnDown = document.querySelector("#button-down");

sections[currentSection].scrollIntoView({
  behavior: "smooth",
  block: "start",
});

sections[currentSection].querySelector(".section-wrapper").classList.add("visible");
// let delay = 0.8;

// for (let i = 0; i < sections.length; i++) {
//   const messages = sections[i].querySelectorAll(".message-wrapper");

//   for (let j = 0; j < messages.length; j++) {
//     messages[j].querySelector(".message").style.transitionDelay = `${delay}s`;
//     delay++;
//   }
//   delay = 0.8;
// }

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

  switch (sections[currentSection].getAttribute("id")) {
    case "parallax1":
      greetingAnimation();
      break;
    case "parallax2":
      introAnimation();
      break;
    case "parallax3":
      const promiseArr = [];
      for (let i = 0; i < sections[currentSection].querySelectorAll(".message").length; i++) {
        promiseArr[i] = messageTextAnimation.bind(
          null,
          `#${sections[currentSection].querySelectorAll(".message")[i].getAttribute("id")}`
        );
      }
      // sections[currentSection].querySelectorAll(".message").map((item) => {
      //   messageTextAnimation.bind(null, `#${item.getAttribute("id")}`);
      // });
      promiseArr.reduce((acc, fn) => acc.then(fn), Promise.resolve());
      break;
  }
};

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

$(document).ready(function () {
  let messageid = 0;
  $(".title").lettering();
  $(".intro span").lettering();
  sections.forEach((section) => {
    section.querySelectorAll(".message").forEach((message) => {
      message.setAttribute("id", `message_${messageid}`);
      $(`#message_${messageid} span`).lettering();
      messageid++;
    });
  });
  greetingAnimation();
});

function greetingAnimation() {
  var title1 = new TimelineMax();
  title1.staggerFromTo(
    ".title span",
    0.5,
    { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
    { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 },
    0.05
  );
}

function introAnimation() {
  var title2 = new TimelineMax();
  title2.staggerFromTo(
    ".intro span span",
    0.5,
    { ease: Back.easeOut.config(0.8), opacity: 0, left: -80 },
    { ease: Back.easeOut.config(0.8), opacity: 1, left: 0 },
    0.045
  );
}

function messageTextAnimation(parent) {
  return new Promise((resolve) => {
    const timeForLetter = 0.04;
    const message = new TimelineMax();
    const totalTime = document.querySelectorAll(`${parent} span span`).length * timeForLetter;
    document.querySelector(parent).classList.add("visible");
    message.staggerFromTo(
      `${parent} span span`,
      0.1,
      { opacity: 0 },
      { opacity: 1 },
      timeForLetter
    );
    setTimeout(() => {
      resolve(totalTime);
    }, totalTime * 750);
  });
}
