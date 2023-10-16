const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const resultinfo = document.querySelector("#result-info");

  if (height == "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Enter valid height";
  } else if (weight == "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Enter valid weight";
  } else {
    let bmi = (weight / ((height * height))).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      resultinfo.textContent = "Under Weight";
    } else if (bmi < 24.9) {
      resultinfo.textContent = "Normal Range";
    } else {
      resultinfo.textContent = "OverWeight";
    }
  }
});
