// let timeLeft = 30;
// let timer = setInterval(function() {
//   if (timeLeft <= 0) {
//     clearInterval(timer);
//     document.getElementById("timer").innerHTML = "Waktu habis!";
//     checkAnswers();
//   } else {
//     document.getElementById("timer").innerHTML = "Waktu: " + timeLeft;
//   }
//   timeLeft -= 1;
// }, 1000);

// function checkAnswers() {
//   let score = 0;
//   const form = document.forms["quizForm"];

//   if (form["q1"].value === "1") score++;
//   if (form["q2"].value === "1") score++;
//   if (form["q3"].value === "1") score++;

//   document.getElementById("result").innerHTML = 
//     "Skor Anda: " + score + "/3";

//   // disable form setelah submit
//   const inputs = form.querySelectorAll("input, button");
//   inputs.forEach(el => el.disabled = true);
// }
// Daftar pertanyaan
// Daftar pertanyaan
// Daftar pertanyaan
const questions = [
  {
    text: "IoT singkatan dari...?",
    answers: [
      { text: "Internet of Technology", correct: false },
      { text: "Internet of Things", correct: true },
      { text: "Integrated of Tools", correct: false },
      { text: "Internet of Tomorrow", correct: false }
    ]
  },
  {
    text: "Perangkat berikut termasuk contoh IoT adalah...?",
    answers: [
      { text: "Printer biasa", correct: false },
      { text: "Smart Home Lamp", correct: true },
      { text: "Mesin ketik", correct: false },
      { text: "Kipas angin manual", correct: false }
    ]
  },
  {
    text: "Protokol yang umum digunakan dalam IoT adalah...?",
    answers: [
      { text: "HTTP", correct: false },
      { text: "MQTT", correct: true },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false }
    ]
  }
];

let currentQuestion = 0;
let timeLeft = 15;
let countdown;
let score = 0; // skor benar

const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".answers");
const timerContainer = document.getElementById("timer-container");
const timerBar = document.getElementById("timer-bar");
const timerText = document.getElementById("timer-text");

// Render pertanyaan
function showQuestion() {
  // reset waktu
  clearInterval(countdown);
  timeLeft = 15;
  timerText.textContent = timeLeft;
  timerBar.style.width = "100%";
  timerContainer.style.display = "block"; // pastikan timer tampil di awal

  // isi pertanyaan
  let q = questions[currentQuestion];
  questionEl.textContent = q.text;

  // isi jawaban
  answersEl.innerHTML = "";
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.classList.add("answer");

    // kasih warna sesuai urutan (biar 2x2 beda warna)
    const colors = ["a", "b", "c", "d"];
    btn.classList.add(colors[i]);

    btn.textContent = ans.text;

    btn.onclick = () => {
      clearInterval(countdown); // stop timer ketika jawab
      // disable semua tombol
      const allBtns = document.querySelectorAll(".answer");
      allBtns.forEach(b => b.disabled = true);

      if (ans.correct) {
        score++;
        btn.style.background = "#28a745"; // hijau
      } else {
        btn.style.background = "#dc3545"; // merah
        // highlight jawaban benar
        const correctBtn = Array.from(allBtns).find(b => {
          return questions[currentQuestion].answers.find(a => a.text === b.textContent && a.correct);
        });
        if (correctBtn) correctBtn.style.background = "#28a745";
      }

      // delay sebelum pindah soal
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    };

    answersEl.appendChild(btn);
  });

  startTimer();
}

// Timer
function startTimer() {
  countdown = setInterval(() => {
    timeLeft--;
    timerText.textContent = timeLeft;
    timerBar.style.width = (timeLeft / 15 * 100) + "%";

    if (timeLeft <= 0) {
      clearInterval(countdown);
      // otomatis lanjut ke soal berikutnya
      nextQuestion();
    }
  }, 1000);
}

// Next question
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

// Selesai kuis
function finishQuiz() {
  clearInterval(countdown);
  questionEl.textContent = "Quiz selesai 🎉";
  answersEl.innerHTML = `<h2>Skor Anda: ${score}/${questions.length}</h2>`;
  timerContainer.style.display = "none"; // sembunyikan timer
}

// Mulai quiz pertama kali
showQuestion();




