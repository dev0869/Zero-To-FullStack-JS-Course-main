// // ----------- BAD WAY-----------
// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick = function () {
//   console.log("Hello World");
// };

// // ----------- GREAT WAY-----------
// const best = document.querySelector(".best");

// best.addEventListener("click", () => {
//   console.log("Yellow");
// });

// // ----------- Event (e) Object -----------
// // It's an event object which contains information about perticular event.

//  const paras = document.querySelector(".para");

//  para.addEventListener("click", (e) => {
//    console.log(e);
//  });

const italics = document.querySelector(".second-btn");
let paras = document.querySelector(".para");
let isClick = true;

italic.addEventListener.classList.toggle("click", () => {
  if (isClick) {
    paras.style.fontStyle = "italic";
  } else {
    paras.style.fontStyle = "normal";
  }
  isClick = !isClick;
});

const italic = document.querySelector(".second-btn");
let para = document.querySelector(".para");

italic.addEventListener("click", () => {
  para.classList.toggle("italic-style");
});

function Bold() {
  if (isClick) {
    paras.style.fontWeight = "bold";
  } else {
    paras.style.fontWeight = "normal";
  }
  isClick = !isClick;
}
