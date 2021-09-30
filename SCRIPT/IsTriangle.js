const Inputs = document.querySelectorAll(".input");
const IsTriangleBtn = document.querySelector("#check-btn");
const Output = document.querySelector(".output");

IsTriangleBtn.addEventListener("click", function isTriangle() {
    Output.style.display="none";
    const sum = sumOfAngles(
      Number(Inputs[0].value),
      Number(Inputs[1].value),
      Number(Inputs[2].value)
    );
    if (sum === 180) {
       showMessage("Woo Hoo!, the angles form a triangle");
    } else {
      showMessage("Opps! The angle doesn't form a triangle");
    }
  });

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}
function showMessage(msg){
    Output.innerText= msg;
    Output.style.display="block";
}
