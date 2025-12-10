// Кількість параграфів <p>
const paragraphs = document.querySelectorAll("p");
console.log("Кількість <p>:", paragraphs.length);

// Кількість заголовків <h2>
const h2s = document.querySelectorAll("h2");
console.log("Кількість <h2>:", h2s.length);

// Значення background-color для <body>
const bodyBg = getComputedStyle(document.body).backgroundColor;
console.log("background-color <body>:", bodyBg);

// Значення font-size для <h1>
const h1 = document.querySelector("h1");
console.log("font-size <h1>:", getComputedStyle(h1).fontSize);
console.log("font-size <h1>:", getComputedStyle(h1).fontSize);

// Функція для зміни кольору
function changeBodyColor() {
    // Отримуємо поточний колір фону
    const currentBgColor = getComputedStyle(document.body).backgroundColor;

    // Перевіряємо, чи колір фонового кольору вже червоний
    if (currentBgColor === "rgb(255, 0, 0)") {
        // Якщо фон вже червоний, змінюємо його на початковий 
        document.body.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
        // Якщо фон не червоний, змінюємо його на червоний
        document.body.style.backgroundColor = "red";
    }
}

// Кнопка
const btn = document.getElementById("startBtn");
btn.addEventListener("click", changeBodyColor);
