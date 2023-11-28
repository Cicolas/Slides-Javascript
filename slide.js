//@ts-check

let slideHeight = document.documentElement.clientHeight;
let slideNum = 0;
let slideCount = 3;

document.addEventListener("keydown", (ev) => {
  if (ev.key === "d") {
    slideNum = Math.min(slideCount - 1, slideNum + 1);
  }
  
  if (ev.key === "a") {
    slideNum = Math.max(0, slideNum - 1);
  }

  window.scrollTo({
    top: slideHeight * slideNum
  })
});
