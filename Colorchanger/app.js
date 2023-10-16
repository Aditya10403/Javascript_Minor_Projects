const buttons = document.querySelectorAll("#container");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "grey") {
        body.style.backgroundColor = "gray";
    }
    else if (e.target.id === "white") {
        body.style.backgroundColor = "white";
    }
    else if (e.target.id === "blue") {
        body.style.backgroundColor = "blue";
    }
    else{
        body.style.backgroundColor = "yellow";
    }
  });
});
