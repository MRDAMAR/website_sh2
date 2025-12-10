// Кількість параграфів <p>
const paragraphs = document.querySelectorAll("p");
console.log("Кількість <p>:", paragraphs.length);

// Кількість заголовків <h2>
const h2s = document.querySelectorAll("h2");
console.log("Кількість <h2>:", h2s.length);

window.addEventListener("load", () => {
    setTimeout(addGalleryImages, 5000); // Чекаємо 5 секунд, а потім додаємо зображення
});

function addGalleryImages() {
    // Масив з URL-адресами зображень
    const imagesUrl = [
        "https://shadowfight2.com/images/slides/screenshot_01.jpg",
        "https://shadowfight2.com/images/slides/screenshot_02.jpg",
        "https://shadowfight2.com/images/slides/screenshot_03.jpg",
        "https://shadowfight2.com/images/slides/screenshot_04.jpg",
        "https://shadowfight2.com/images/slides/screenshot_05.jpg",
        "https://shadowfight2.com/images/slides/screenshot_06.jpg"
    ];

    // Отримуємо контейнер для галереї
    const gallery = document.querySelector(".gallery-images");
    if (!gallery) {
        return;
    }

    // Додаємо зображення по черзі
    imagesUrl.forEach((url, index) => {
        setTimeout(() => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = `Скріншот ${index + 1}`;
            img.classList.add("fade-in");
            gallery.appendChild(img); // Додаємо зображення в галерею
        }, index * 1000); // Затримка між зображеннями 1 секунда
    });
}

// Функція для зміни кольору фону
function changeBodyColor() {
    // Отримуємо поточний колір фону
    const currentBgColor = getComputedStyle(document.body).backgroundColor;

    // Перевіряємо, чи колір фону вже червоний
    if (currentBgColor === "rgb(255, 0, 0)") {
        // Якщо фон вже червоний, змінюємо його на початковий білий
        document.body.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
        // Якщо фон не червоний, змінюємо його на червоний
        document.body.style.backgroundColor = "red";
    }
}

// Кнопка для зміни кольору фону
const btn = document.getElementById("startBtn");
btn.addEventListener("click", changeBodyColor);
