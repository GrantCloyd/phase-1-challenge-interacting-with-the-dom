let counterLoc = document.querySelector("#counter");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const heartButton = document.querySelector("#heart");
const pauseButton = document.querySelector("#pause");
const commentsLoc = document.querySelector("#list");
counter = Number(counterLoc.textContent);
let timer = setInterval(timeChanger, 1000);

function init() {
  pauseFunction();
}

//adds functionality on load of domContent, minus and plus functionality
const minusButtonFunc = () => {
  counterLoc.textContent = Number(counter--);
};
const plusButtonFunc = () => {
  counterLoc.textContent = Number(counter++);
};

const pauseFunction = () => {
  if (pauseButton.textContent === "pause") {
    pauseButton.textContent = "resume";
    minusButton.disabled = true;
    plusButton.disabled = true;
    stopTimer();
  } else {
    pauseButton.textContent = "pause";
    minusButton.disabled = false;
    plusButton.disabled = false;
    console.log(timer);
  }
};

function timeChanger() {
  ++counter;
  counterLoc.textContent = parseInt(counter);
}

function stopTimer() {
  clearInterval(timer);
}

function heartFunc() {
  let li = document.createElement("li");
  li.textContent = `${counter} liked!`;
  let ul = document.querySelector("ul");
  ul.appendChild(li);
}
function leaveCommFunc(e) {
  e.preventDefault();
  let p = document.createElement("p");
  console.log(e.target);
  p.textContent = e.target[0].value;
  commentsLoc.appendChild(p);
}

minusButton.addEventListener("click", minusButtonFunc);
plusButton.addEventListener("click", plusButtonFunc);
pauseButton.addEventListener("click", pauseFunction);
heartButton.addEventListener("click", heartFunc);
document
  .querySelector("#comment-form")
  .addEventListener("submit", leaveCommFunc);

init();
