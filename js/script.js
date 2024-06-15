let circle = document.querySelector("#circle");
let slider = document.querySelector(".slider");
let conteiner = document.querySelector(".conteiner");
let square = document.querySelector("#square");
let result = document.querySelector(".result");
const { a, b, c, left } = conteiner.getBoundingClientRect();
const squareRect = square.getBoundingClientRect();
const squareLength = squareRect.right - squareRect.left;

function moveCircle(e) {
  e.preventDefault();
  if (
    e.x <= squareRect.right + 5 &&
    e.x >= squareRect.left - 5 &&
    e.y >= squareRect.top &&
    e.y <= squareRect.bottom
  ) {
    let res = Math.round(((e.x - squareRect.left) / squareLength) * 100);
    result.innerHTML = res;
    circle.style.left = e.x - left - 55 + "px";
  }
}

circle.addEventListener("mousedown", (e) => {
  e.preventDefault();
  square.addEventListener("mousemove", moveCircle);
});
circle.addEventListener("mouseup", (e) => {
  e.preventDefault();
  square.removeEventListener("mousemove", moveCircle);
});
document.body.addEventListener("mouseup", (e) => {
  e.preventDefault();
  square.removeEventListener("mousemove", moveCircle);
});
