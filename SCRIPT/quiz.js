const Quizform = document.querySelector(".quiz");
const SubmitBtn = document.querySelector("#check-btn");
const Output = document.querySelector(".output");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];
SubmitBtn.addEventListener("click", function calculateScore() {
    Output.style.display="none";
    const formResults = new FormData(Quizform);
    let score = 0,
      index = 0;
    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }
    showMessage("The score is " + score);
  });
function showMessage(msg){
    Output.innerText= msg;
    Output.style.display="block"
}