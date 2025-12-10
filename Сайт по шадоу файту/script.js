// Функція для очищення тексту та розбиття на слова
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
