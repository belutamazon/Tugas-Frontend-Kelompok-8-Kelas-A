let timeLeft = 30;
let timer = setInterval(function() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Waktu habis!";
    checkAnswers();
  } else {
    document.getElementById("timer").innerHTML = "Waktu: " + timeLeft;
  }
  timeLeft -= 1;
}, 1000);

function checkAnswers() {
  let score = 0;
  const form = document.forms["quizForm"];

  if (form["q1"].value === "1") score++;
  if (form["q2"].value === "1") score++;
  if (form["q3"].value === "1") score++;

  document.getElementById("result").innerHTML = 
    "Skor Anda: " + score + "/3";

  // disable form setelah submit
  const inputs = form.querySelectorAll("input, button");
  inputs.forEach(el => el.disabled = true);
}
