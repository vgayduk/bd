const sections = document.querySelectorAll(".parallaxParent");
let currentSection = 0;

const btnUp = document.querySelector("#button-up");
const btnDown = document.querySelector("#button-down");

sections[currentSection].scrollIntoView({
  behavior: "smooth",
  block: "start",
});

sections[currentSection].querySelector(".section-wrapper").classList.add("visible");

const scrollEventHandler = (value) => {
  if (value > 0 && currentSection < sections.length - 1) {
    currentSection++;
    sections[currentSection - 1].querySelector(".section-wrapper").classList.remove("visible");
    sections[currentSection - 1].querySelectorAll(".message").forEach((item) => {
      item.classList.remove("visible");
    });
  } else if (value < 0 && currentSection > 0) {
    currentSection--;
    sections[currentSection + 1].querySelector(".section-wrapper").classList.remove("visible");
    sections[currentSection + 1].querySelectorAll(".message").forEach((item) => {
      item.classList.remove("visible");
    });
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
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax4":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`
      );
      break;
    case "parallax5":
      setVisibleSection();
      break;
    case "parallax6":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax7":
      setVisibleSection();
      break;
    case "parallax8":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax9":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax10":
      setVisibleSection();
      break;
    case "parallax11":
      setVisibleSection();
      break;
    case "parallax12":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax13":
      setVisibleSection();
      break;
    case "parallax14":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax15":
      setVisibleSection();
      break;
    case "parallax16":
      setVisibleSection();
      break;
    case "parallax17":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax18":
      setVisibleSection();
      break;
    case "parallax19":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax20":
      setVisibleSection();
      break;
    case "parallax21":
      setVisibleSection();
      break;
    case "parallax22":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax23":
      setVisibleSection();
      break;
    case "parallax24":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax25":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax26":
      setVisibleSection();
      break;
    case "parallax27":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax28":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax29":
      setVisibleSection();
      break;
    case "parallax30":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax31":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
    case "parallax32":
      descriptionAnimation(
        `#${sections[currentSection].querySelector(".description").getAttribute("id")}`,
        0.03
      );
      break;
  }
};

function setVisibleSection() {
  const promiseArr = [];
  for (let i = 0; i < sections[currentSection].querySelectorAll(".message").length; i++) {
    promiseArr[i] = messageTextAnimation.bind(
      null,
      `#${sections[currentSection].querySelectorAll(".message")[i].getAttribute("id")}`
    );
  }
  promiseArr.reduce((acc, fn) => acc.then(fn), Promise.resolve());
}

btnUp.addEventListener("click", () => {
  scrollEventHandler(-1);
});
btnDown.addEventListener("click", () => {
  scrollEventHandler(1);
});

const controller = new ScrollMagic.Controller({
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

// Register messages below
$(document).ready(function () {
  let messageid = 0;
  let descriptionid = 0;

  $(".title").lettering();
  $(".intro span").lettering();
  sections.forEach((section) => {
    section.querySelectorAll(".message").forEach((message) => {
      message.setAttribute("id", `message_${messageid}`);
      $(`#message_${messageid} span`).lettering();
      messageid++;
    });
    section.querySelectorAll(".description").forEach((item) => {
      item.setAttribute("id", `description_${descriptionid}`);
      $(`#description_${descriptionid} span`).lettering();
      descriptionid++;
    });
  });
  greetingAnimation();
});

function greetingAnimation() {
  const title1 = new TimelineMax();
  title1.staggerFromTo(
    ".title span",
    0.5,
    { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
    { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 },
    0.05
  );
}

function introAnimation() {
  const title2 = new TimelineMax();
  title2.staggerFromTo(
    ".intro span span",
    0.5,
    { ease: Back.easeOut.config(0.8), opacity: 0, left: -80 },
    { ease: Back.easeOut.config(0.8), opacity: 1, left: 0 },
    0.045
  );
}

// function messageTextAnimation(id) {
//   return new Promise((resolve) => {
//     const timeForLetter = 0.025;
//     const message = new TimelineMax();
//     const totalTime = document.querySelectorAll(`${id} span span`).length * timeForLetter;
//     document.querySelector(id).classList.add("visible");
//     message.staggerFromTo(`${id} span span`, 0.1, { opacity: 0 }, { opacity: 1 }, timeForLetter);
//     if (!document.querySelector(id).parentNode.classList.contains("end"))
//       setTimeout(() => {
//         resolve(totalTime);
//       }, totalTime * 950);
//   });
// }

function messageTextAnimation(id) {
  return new Promise((resolve) => {
    const message = new TimelineMax();
    document.querySelector(id).classList.add("visible");
    message.staggerFromTo(`${id} span span`, 0.1, { opacity: 0 }, { opacity: 1 }, 0);
    resolve();
  });
}

function descriptionAnimation(id, letterSpeed = null) {
  const description = new TimelineMax();
  description.staggerFromTo(
    `${id} span span`,
    0.5,
    { ease: Back.easeOut.config(0.8), opacity: 0, left: -80 },
    { ease: Back.easeOut.config(0.8), opacity: 1, left: 0 },
    // letterSpeed || 0.05
    0
  );
}
