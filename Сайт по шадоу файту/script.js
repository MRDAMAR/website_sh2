// Функція для перевірки даних форми
document.getElementById("authForm").addEventListener("submit", function(event) {
    event.preventDefault(); // запобігаємо перезавантаженню сторінки

    // Отримуємо значення з полів форми
    let login = document.getElementById("login").value.trim();// Функція для очищення тексту та розбиття на слова
function getWords(text) {
    return text
        .toLowerCase() // Перетворюємо в нижній регістр
        .replace(/[^\wа-яіїєґ']+/gi, " ") // видаляємо розділові знаки
        .split(/\s+/) // розбиваємо на слова
        .filter(Boolean); // прибираємо порожні елементи
}

// Основна функція для знаходження спільних слів
function findCommonWords(phrase1, phrase2) {
    const words1 = getWords(phrase1);
    const words2 = getWords(phrase2);

    const set1 = new Set(words1); // набір слів для першої фрази
    const set2 = new Set(words2); // набір слів для другої фрази

    // Знаходимо спільні елементи
    return [...set1].filter(word => set2.has(word));
}

// Обробка події на кнопці
document.getElementById("compareButton").addEventListener("click", function() {
    const phrase1 = document.getElementById("phraseInput1").value.trim();
    const phrase2 = document.getElementById("phraseInput2").value.trim();

    // Перевірка на порожні фрази
    if (!phrase1 || !phrase2) {
        document.getElementById("result").textContent = "Будь ласка, введіть обидві фрази.";
        return;
    }

    const commonWords = findCommonWords(phrase1, phrase2);

    // Виведення результату
    if (commonWords.length > 0) {
        document.getElementById("result").textContent = "Спільні слова: " + commonWords.join(", ");
    } else {
        document.getElementById("result").textContent = "Спільних слів немає.";
    }
});
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    // Перевірка login
    let loginPattern = /^[a-zA-Z0-9_]{3,20}$/; // дозволяє латиницю, цифри та підкреслення
    if (login.match(loginPattern)) {
        document.getElementById("loginResult").textContent = "✅ Login введено правильно";
        document.getElementById("loginResult").style.color = "green"; // зелений для правильного
    } else {
        document.getElementById("loginResult").textContent = "❌ Login неправильний. Лише латиниця, цифри, підкреслення.";
        document.getElementById("loginResult").style.color = "red"; // червоний для неправильного
    }

    // Перевірка email
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (email.match(emailPattern)) {
        document.getElementById("emailResult").textContent = "✅ Email правильний";
        document.getElementById("emailResult").style.color = "green"; // зелений для правильного
    } else {
        document.getElementById("emailResult").textContent = "❌ Email неправильний";
        document.getElementById("emailResult").style.color = "red"; // червоний для неправильного
    }

    // Перевірка phone
    let phonePattern = /^\+380\d{9}$/; // український телефонний номер
    if (phone.match(phonePattern)) {
        document.getElementById("phoneResult").textContent = "✅ Номер телефону правильний";
        document.getElementById("phoneResult").style.color = "green"; // зелений для правильного
    } else {
        document.getElementById("phoneResult").textContent = "❌ Номер телефону неправильний";
        document.getElementById("phoneResult").style.color = "red"; // червоний для неправильного
    }

    // Очищення логіну від зайвих символів (не латиниця, не цифри, не підкреслення)
    let cleanedLogin = login.replace(/[^a-zA-Z0-9_]/g, ""); // видаляємо все, що не є латиницею, цифрою чи підкресленням
    console.log("Очищений логін: " + cleanedLogin); // Показуємо очищений логін в консолі
});

