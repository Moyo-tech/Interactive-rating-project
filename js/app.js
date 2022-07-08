const ratingList = document.querySelectorAll(".rating__list_value");
const lenList = ratingList.length;
const ratingDiv = document.querySelector(".rating");
const resultDiv = document.querySelector(".result");

let clickedElement = "sample";

let countClick = 0;
function changeStyle() {
  ratingList.forEach((elem, index) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      if (countClick < 1) {
        clickedElement = elem;
        elem.style.cssText = "background-color: #7C8798; color: #FFFFFF";
      } else if (countClick >= 1) {
        alert("You can only pick one");
      }
      countClick++;
      getClicked();
    });
  });
}

changeStyle();

function getClicked() {
  let clickedValue = clickedElement.innerText;
  console.log(clickedValue);

  let resultValue = document.querySelector(".result__value");
  resultValue.innerHTML = `You selected ${clickedValue} out of 5`;
}

function renderThankyou() {
  if (ratingDiv.style.display === "block") {
    ratingDiv.style.display = "none";
  }
  resultDiv.style.display = "block";
}
