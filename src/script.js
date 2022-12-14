// @ts-check
// @ts-ignore
import bezierEasing from "https://cdn.skypack.dev/bezier-easing@2.1.0";

const ease = bezierEasing(0.25, 0.1, 0.25, 1.0);
const easeIn = bezierEasing(0.38, 0.01, 0.78, 0.13);
const midSlow = bezierEasing(0, 0.7, 1, 0.3);

const def = new Map([
  [
    "slide1",
    {
      id: "slide1",
      top: 500,
      bottom: 1900,
      topStyle: {
        opacity: 0,
        translateY: -60,
      },
      bottomStyle: {
        opacity: 0,
        translateY: 60,
      },
      animations: [
        {
          enabled: false,
          top: 500,
          bottom: 1900,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 500,
          bottom: 800,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 1400,
          bottom: 1900,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "scroll-down",
    {
      id: "scroll-down",
      top: 0,
      bottom: 1000,
      topStyle: {
        opacity: 1,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 600,
          bottom: 1000,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide2",
    {
      id: "slide2",
      top: 1900,
      bottom: 3200,
      topStyle: {
        opacity: 0,
        translateY: -60,
      },
      bottomStyle: {
        opacity: 0,
        translateY: 60,
      },
      animations: [
        {
          enabled: false,
          top: 1900,
          bottom: 3200,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 1900,
          bottom: 2500,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 2600,
          bottom: 3200,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide3",
    {
      id: "slide3",
      top: 3300,
      bottom: 4600,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 3300,
          bottom: 4600,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 3300,
          bottom: 3900,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 4000,
          bottom: 4600,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "moving-background",
    {
      id: "moving-background",
      top: 4500,
      bottom: 5900,
      topStyle: {
        opacity: 0,
        translateY: 300,
      },
      bottomStyle: {
        opacity: 0,
        translateY: 0,
      },
      animations: [
        {
          enabled: false,
          top: 4500,
          bottom: 5300,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
            {
              name: "translateY",
              topValue: 200,
              bottomValue: 0,
            },
          ],
        },
        {
          enabled: false,
          top: 5300,
          bottom: 5900,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide4",
    {
      id: "slide4",
      top: 4700,
      bottom: 6000,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 4700,
          bottom: 6000,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 4700,
          bottom: 5300,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
        {
          enabled: false,
          top: 5400,
          bottom: 6000,
          easing: easeIn,
          styles: [
            {
              name: "opacity",
              topValue: 1,
              bottomValue: 0,
            },
          ],
        },
      ],
    },
  ],
  [
    "slide5",
    {
      id: "slide5",
      top: 6100,
      bottom: 9000,
      topStyle: {
        opacity: 0,
      },
      bottomStyle: {
        opacity: 0,
      },
      animations: [
        {
          enabled: false,
          top: 6100,
          bottom: 7100,
          easing: midSlow,
          styles: [
            {
              name: "translateY",
              topValue: 60,
              bottomValue: -60,
            },
          ],
        },
        {
          enabled: false,
          top: 6100,
          bottom: 6700,
          easing: ease,
          styles: [
            {
              name: "opacity",
              topValue: 0,
              bottomValue: 1,
            },
          ],
        },
      ],
    },
  ],
]);

const enabled = new Map();
const disabled = new Map();

/**
 * ?????? ????????? `top`??? `bottom` ????????? ????????? ???????????? ??????
 * @param {number} num
 * @param {number} top
 * @param {number} bottom
 */
function isAmong(num, top, bottom) {
  return num >= top && num <= bottom;
}

/**
 * top??? bottom ???????????? ????????? ?????? ?????? ?????? ???????????? ??????
 * @param {number} top
 * @param {number} bottom
 * @param {number} rate 0~1
 */
function getPoint(top, bottom, rate) {
  return top + (bottom - top) * rate;
}

/**
 * DOM ????????? ???????????? ???????????? ??????
 * @param {HTMLElement} element
 * @param {*} styleName
 * @param {number} value
 */
function applyStyle(element, styleName, value) {
  if (styleName === "translateY") {
    element.style.transform = `translateY(${value}px)`;
    return;
  }

  if (styleName === "translateX") {
    element.style.transform = `translateX(${value}px)`;
    return;
  }

  element.style[styleName] = `${value}`;
}

/** @type {{[key: string]: any}} */
const elements = {
  "sticky-container": document.getElementById("sticky-container"),
  "scroll-down": document.getElementById("scroll-down"),
  slide1: document.getElementById("slide1"),
  slide2: document.getElementById("slide2"),
  slide3: document.getElementById("slide3"),
  "moving-background": document.getElementById("moving-background"),
  slide4: document.getElementById("slide4"),
  slide5: document.getElementById("slide5"),
};

function onScroll() {
  // ?????? ????????? ?????? ??????
  const scrollTop = window.scrollY || window.pageYOffset;
  const currentPos = scrollTop + window.innerHeight / 2;

  // disabled ???????????? ???????????? ?????? ??????.
  disabled.forEach((obj, id) => {
    // ?????? ?????? ????????? ?????? ?????? ?????????
    if (isAmong(currentPos, obj.top, obj.bottom)) {
      enabled.set(id, obj);
      elements[id].classList.remove("disabled");
      elements[id].classList.add("enabled");
      disabled.delete(id);
    }
  });

  // enabled ??????????????? ????????? ????????? ??????
  enabled.forEach((obj, id) => {
    const { top, bottom, topStyle, bottomStyle } = obj;

    // ?????? ?????? ?????????
    if (!isAmong(currentPos, top, bottom)) {
      // ?????? ???????????? ???????????? ????????? ??????
      if (currentPos <= top) {
        Object.entries(topStyle).forEach(([styleName, value]) => {
          applyStyle(elements[id], styleName, value);
        });
      }
      // ????????? ???????????? ????????? ???????????????
      else if (currentPos >= bottom) {
        Object.entries(bottomStyle).forEach(([styleName, value]) => {
          applyStyle(elements[id], styleName, value);
        });
      }

      // ??????????????? ???????????? disabled??? ??????.
      disabled.set(id, obj);
      elements[id].classList.remove("enabled");
      elements[id].classList.add("disabled");
      enabled.delete(id);
    }

    // enable ?????????, ?????? ????????? ????????? ????????? ??? ??????????????? ???????????????.
    else {
      applyAnimations(currentPos, id);
    }
  });
}

window.addEventListener("scroll", onScroll);

function initAnimation() {
  // Sticky Conainer ??? ????????? ?????????.
  elements["sticky-container"].style.height = `7100px`;

  // ?????? ????????? disabled ??? ??????.
  def.forEach((obj, id) => {
    disabled.set(id, obj);
  });

  // ?????? ????????? ??????
  disabled.forEach((obj, id) => {
    Object.keys(obj.topStyle).forEach((styleName) => {
      const pushValue = obj.topStyle[styleName];
      applyStyle(elements[id], styleName, pushValue);
    });
  });

  // ?????? ????????? ?????? ??? ?????????????????? ????????? ?????? ????????? ??????????????? ??????
  // ????????? ????????? ????????? ???????????? ??? ??? ????????????.
  onScroll();
}

initAnimation();

/**
 * ???????????? ?????? ?????? ?????? ???????????? ???????????? ??????
 * @param {string} id
 * @param {any[]} styles
 * @param {number} rate
 */
function applyStyles(id, styles, rate) {
  styles.forEach((style) => {
    const { name, topValue, bottomValue } = style;
    const value = getPoint(topValue, bottomValue, rate);
    applyStyle(elements[id], name, value);
  });
}

/**
 * ?????? ????????? ????????? ???????????? ?????? Element??? ?????????????????? ?????? ??????????????????.
 * @param {number} currentPos
 * @param {string} id
 */
function applyAnimations(currentPos, id) {
  const animations = def.get(id)?.animations;
  if (!animations) {
    return;
  }

  animations.forEach((animation) => {
    const { top: a_top, bottom: a_bottom, easing, styles } = animation;
    const isIn = isAmong(currentPos, a_top, a_bottom);
    // ?????? ?????????????????? ????????? ????????? ??? ?????? ????????? enabled ??????
    if (isIn && !animation.enabled) {
      animation.enabled = true;
    }

    // ?????? ??????????????? ?????? ?????? ????????? enabled ??????????????? ????????? ?????????
    else if (!isIn && animation.enabled) {
      if (currentPos <= a_top) {
        applyStyles(id, styles, 0);
      } else if (currentPos >= a_bottom) {
        applyStyles(id, styles, 1);
      }
      animation.enabled = false;
    }

    // ?????????????????? enabled ??????, ??????????????? ??????.
    if (animation.enabled) {
      const rate = easing((currentPos - a_top) / (a_bottom - a_top));
      applyStyles(id, styles, rate);
    }
  });
}
