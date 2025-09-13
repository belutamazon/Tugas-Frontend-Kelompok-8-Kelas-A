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
        text: "Apa singkatan dari HTML?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Hypertool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
        ],
    },
    {
        text: "Apa yang dimaksud dengan CSS?",
        answers: [
            { text: "Sebuah bahasa pemrograman untuk logika website", correct: false },
            { text: "Sebuah metode untuk mempersingkat penulisan tag HTML", correct: true },
            { text: "Sebuah sistem database untuk menyimpan data", correct: false },
            { text: "Sebuah framework JavaScript", correct: false },
        ],
    },
    {
        text: "Bagaimana cara menuliskan kode JavaScript di dalam file HTML?",
        answers: [
            { text: "Menggunakan tag <js>", correct: false },
            { text: "Langsung menuliskannya di dalam tag <body>", correct: false },
            { text: "Menggunakan tag <script>", correct: true },
            { text: "Menuliskannya di atribut <a> dengan href", correct: false },
        ],
    },
    {
        text: "Variabel let nama = 'John Doe'; memiliki tipe data apa?",
        answers: [
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
            { text: "String", correct: true },
            { text: "Object", correct: false },
        ],
    },
    {
        text: "Apa perbedaan antara font-weight: bold dan font-style: italic dalam CSS?",
        answers: [
            { text: "font-weight membuat teks miring, font-style membuat teks tebal.", correct: false },
            { text: "Keduanya memiliki fungsi yang sama.", correct: false },
            { text: "font-weight membuat font menjadi tebal atau tipis, sementara font-style mengatur font menjadi normal, miring, atau oblique.", correct: true },
            { text: "font-weight hanya untuk angka, font-style untuk huruf.", correct: false },
        ],
    },
    {
        text: "Bagaimana cara memberikan komentar satu baris pada JavaScript?",
        answers: [
            { text: "", correct: false },
            { text: "/* Ini komentar */", correct: false },
            { text: "// Ini komentar", correct: true },
            { text: "## Ini komentar", correct: false },
        ],
    },
    {
        text: "Apa kegunaan dari Document Object Model (DOM) dalam JavaScript?",
        answers: [
            { text: "Mengatur server dan database", correct: false },
            { text: "Memanipulasi dokumen HTML/XML", correct: true },
            { text: "Membuat grafik dan animasi", correct: false },
            { text: "Menuliskan file eksternal", correct: false },
        ],
    },
    {
        text: "Apa yang dilakukan properti CSS display: none?",
        answers: [
            { text: "Menyembunyikan elemen, tetapi tetap menyisakan ruangnya di halaman.", correct: false },
            { text: "Menyembunyikan elemen dan tidak menyisakan ruangnya di halaman.", correct: true },
            { text: "Membuat elemen menjadi transparan.", correct: false },
            { text: "Menghapus elemen secara permanen dari dokumen.", correct: false },
        ],
    },
    {
        text: "Apa perbedaan antara id selector dan class selector dalam CSS?",
        answers: [
            { text: "class selector diawali dengan #, sedangkan id selector dengan .", correct: false },
            { text: "id selector harus unik dan hanya bisa digunakan sekali per halaman, sedangkan class selector bisa digunakan berulang kali.", correct: true },
            { text: "id selector untuk elemen <p>, class selector untuk elemen <h1>.", correct: false },
            { text: "Keduanya memiliki fungsi yang sama.", correct: false },
        ],
    },
    {
        text: "Apa yang dimaksud dengan responsive web design?",
        answers: [
            { text: "Mendesain website hanya untuk desktop.", correct: false },
            { text: "Mendesain website agar kontennya menyesuaikan tampilan di berbagai perangkat.", correct: true },
            { text: "Mendesain website dengan kecepatan tinggi.", correct: false },
            { text: "Mendesain website dengan banyak animasi.", correct: false },
        ],
    },
    {
        text: "Apa yang dimaksud dengan variable dalam JavaScript?",
        answers: [
            { text: "Sebuah keyword untuk membuat fungsi.", correct: false },
            { text: "Sebuah objek yang berisi data dan dapat dimodifikasi selama eksekusi program.", correct: true },
            { text: "Tipe data primitif.", correct: false },
            { text: "Kode yang berjalan di sisi server.", correct: false },
        ],
    },
    {
        text: "Bagaimana cara mendeklarasikan array dalam JavaScript?",
        answers: [
            { text: "let myArr = {};", correct: false },
            { text: "let myArr = [];", correct: true },
            { text: "let myArr = <>", correct: false },
            { text: "let myArr = Array{};", correct: false },
        ],
    },
    {
        text: "Properti CSS apa yang digunakan untuk mengatur jarak antara kata?",
        answers: [
            { text: "letter-spacing", correct: false },
            { text: "word-spacing", correct: true },
            { text: "line-height", correct: false },
            { text: "text-indent", correct: false },
        ],
    },
    {
        text: "Apa yang membedakan JavaScript dari Java?",
        answers: [
            { text: "Java adalah bahasa skrip untuk interaksi web, sedangkan JavaScript untuk aplikasi komputer.", correct: false },
            { text: "JavaScript adalah versi lama dari Java.", correct: false },
            { text: "Java adalah bahasa pemrograman, sementara JavaScript adalah bahasa skrip untuk interaksi di browser.", correct: true },
            { text: "Keduanya adalah bahasa yang sama.", correct: false },
        ],
    },
    {
        text: "Mana yang termasuk **tipe data primitif** dalam JavaScript?",
        answers: [
            { text: "Object", correct: false },
            { text: "Array", correct: false },
            { text: "Function", correct: false },
            { text: "String", correct: true },
        ],
    },
    {
        text: "Atribut HTML yang digunakan untuk mengunggah file ke website adalah...",
        answers: [
            { text: "<input type='submit'>", correct: false },
            { text: "<input type='file'>", correct: true },
            { text: " <input type='button'>", correct: false },
            { text: "<input type='text'>", correct: false },
        ],
    },
    {
        text: "Operator logika apa yang menghasilkan true jika salah satu dari dua kondisi bernilai true?",
        answers: [
            { text: "&& (AND)", correct: false },
            { text: "|| (OR)", correct: true },
            { text: "! (NOT)", correct: false },
            { text: "<>", correct: false },
        ],
    },
    {
        text: "Apa fungsi dari git dalam pengembangan perangkat lunak?",
        answers: [
            { text: "Membuat website secara instan", correct: false },
            { text: "Sistem kontrol versi yang mencatat setiap perubahan pada file proyek.", correct: true },
            { text: "Mengelola database server", correct: false },
            { text: "Mendesain antarmuka pengguna", correct: false },
        ],
    },
    {
        text: "Box Model dalam CSS terdiri dari apa saja?",
        answers: [
            { text: "Content, Border, Padding, Margin", correct: true },
            { text: "Div, Class, ID", correct: false },
            { text: "Tag, Atribut, Nilai", correct: false },
            { text: "Head, Body, Footer", correct: false },
        ],
    },
    {
        text: "Properti CSS apa yang digunakan untuk mengatur posisi vertikal suatu elemen?",
        answers: [
            { text: "text-align", correct: false },
            { text: "vertical-align", correct: true },
            { text: "text-decoration", correct: false },
            { text: "margin", correct: false },
        ],
    },
];

let currentQuestion = 0;
// Mengubah waktu total menjadi 20 detik
let timeLeft = 20;
let countdown;
let score = 0;
let hasPotion = false;
let correctStreak = 0;

const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

const questionEl = document.querySelector(".question");
const answersEl = document.querySelector(".answers");
const timerContainer = document.getElementById("timer-container");
const timerBar = document.getElementById("timer-bar");
const timerText = document.getElementById("timer-text");
const potionBtn = document.getElementById("potion-btn");
const notificationEl = document.getElementById("notification");

potionBtn.addEventListener("click", () => {
    if (hasPotion) {
        hasPotion = false;
        potionBtn.disabled = true;
        potionBtn.style.display = 'none';

        const allBtns = document.querySelectorAll(".answer");
        const wrongAnswers = Array.from(allBtns).filter(btn => {
            const currentQ = shuffledQuestions[currentQuestion];
            const answerObj = currentQ.answers.find(a => a.text === btn.textContent);
            return !answerObj.correct;
        });

        wrongAnswers.sort(() => 0.5 - Math.random());
        if (wrongAnswers.length >= 2) {
            wrongAnswers[0].style.display = 'none';
            wrongAnswers[1].style.display = 'none';
        }

        showNotification("Dua jawaban salah telah dihilangkan.", "info");
    }
});

function showNotification(message, type) {
    notificationEl.textContent = message;
    notificationEl.className = `notification ${type}`;
    notificationEl.style.display = 'block';
    setTimeout(() => {
        notificationEl.style.display = 'none';
    }, 3000);
}

function showQuestion() {
    clearInterval(countdown);
    // Mengatur ulang waktu menjadi 20 detik
    timeLeft = 20;
    timerText.textContent = timeLeft;
    timerBar.style.width = "100%";
    timerContainer.style.display = "block";
    notificationEl.style.display = 'none';

    if (currentQuestion >= shuffledQuestions.length) {
        finishQuiz();
        return;
    }

    const q = shuffledQuestions[currentQuestion];
    questionEl.textContent = q.text;
    answersEl.innerHTML = "";

    const shuffledAnswers = q.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.classList.add("answer");
        const colors = ["a", "b", "c", "d"];
        btn.classList.add(colors[i]);
        btn.textContent = ans.text;

        btn.onclick = () => {
            clearInterval(countdown);
            const allBtns = document.querySelectorAll(".answer");
            allBtns.forEach((b) => (b.disabled = true));

            const isCorrect = ans.correct;

            if (isCorrect) {
                score++;
                correctStreak++;
                btn.style.background = "#28a745";

                if (correctStreak >= 2 && !hasPotion) {
                    hasPotion = true;
                    potionBtn.disabled = false;
                    potionBtn.style.display = 'block';
                    correctStreak = 0;
                    showNotification("Anda mendapatkan 'Potion'!", "success");
                }
            } else {
                correctStreak = 0;
                btn.style.background = "#dc3545";
                const correctBtn = Array.from(allBtns).find((b) => {
                    const answerObj = q.answers.find(a => a.text === b.textContent);
                    return answerObj.correct;
                });
                if (correctBtn) correctBtn.style.background = "#28a745";
            }

            setTimeout(() => {
                nextQuestion();
            }, 1000);
        };
        answersEl.appendChild(btn);
    });
    startTimer();
}

function startTimer() {
    countdown = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;
        // Memperbarui perhitungan bilah timer agar sesuai dengan total waktu 20 detik
        timerBar.style.width = (timeLeft / 20) * 100 + "%";

        if (timeLeft <= 0) {
            clearInterval(countdown);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < shuffledQuestions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    clearInterval(countdown);
    questionEl.textContent = "Quiz selesai 🎉";
    answersEl.innerHTML = `<h2>Skor Anda: ${score}/${shuffledQuestions.length}</h2>`;
    timerContainer.style.display = "none";
    potionBtn.style.display = "none";
    notificationEl.style.display = 'none';
}

showQuestion();