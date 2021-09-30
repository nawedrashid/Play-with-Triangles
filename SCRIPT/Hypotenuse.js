const Sides = document.querySelectorAll(".input");
const CalculateBtn = document.querySelector("#check-btn");
const Output = document.querySelector(".output");

CalculateBtn.addEventListener("click", function calculateHypotenuse() {
  Output.style.display="none";
  const sumOfSquares = calculateSumOfSquare(
    Number(Sides[0].value),
    Number(Sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  showMessage("The length of hypotenuse is " + lengthOfHypotenuse);
});

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}
function showMessage(msg){
  Output.innerText= msg;
  Output.style.display="block";
}