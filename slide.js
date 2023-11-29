//@ts-check

const slideHTML = document.getElementById("slides");
let slideHeight = document.documentElement.clientHeight;
let slideNum = 0;
let slideCount = 22;

window.addEventListener("keydown", (ev) => {
  if (ev.key === "d") {
    slideNum = Math.min(slideCount - 1, slideNum + 1);
  }
  
  if (ev.key === "a") {
    slideNum = Math.max(0, slideNum - 1);
  }

  slideHTML?.scrollTo({
    top: slideHeight * slideNum
  })
});

window.addEventListener("resize", (ev) => {
  slideHeight = document.documentElement.clientHeight;
})