const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const Calculate = document.querySelector("#check-btn");
const Output = document.querySelector(".output");

Calculate.addEventListener("click", function calculateArea(e) {
    e.preventDefault();
    Output.style.display="none";
    const firstSideValue = Number(firstSide.value);
    const secondSideValue = Number(secondSide.value);
    const thirdSideValue = Number(thirdSide.value);
  
    if(
      firstSideValue + secondSideValue > thirdSideValue &&
      secondSideValue + thirdSideValue > firstSideValue &&
      firstSideValue + thirdSideValue > secondSideValue
    ) {
      const semiPerimeter =
        (firstSideValue + secondSideValue + thirdSideValue) / 2;
  
      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstSideValue) *
          (semiPerimeter - secondSideValue) *
          (semiPerimeter - thirdSideValue)
      ).toFixed(4);
      showMessage("Area of a triangle using heron's formula is " + result);
    } else {
      showMessage("Enter valid side lengths");
    }
  });
function showMessage(msg){
    Output.innerText= msg;
    Output.style.display="block";
}