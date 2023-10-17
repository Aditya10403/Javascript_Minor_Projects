const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

// generate random color
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
};

let intervalId;
const startchangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changecolor, 1000);
  }

  function changecolor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopchangingColor = () => {
  clearInterval(intervalId);
  intervalId = null; // to flush out not req items
};

startBtn.addEventListener("click", startchangingColor);
stopBtn.addEventListener("click", stopchangingColor);
