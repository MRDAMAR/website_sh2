// Асинхронна функція для запиту до API
async function getDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random'; // API для випадкових картинок собак

    try {
        const response = await fetch(url); // робимо запит до API

        if (!response.ok) {
            throw new Error('Помилка запиту: ' + response.status);
        }

        const data = await response.json(); // перетворюємо відповідь у JS-об’єкт
        console.log(data);

        // Виводимо фото на сторінку
        const container = document.getElementById('dogContainer');
        container.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;

    } catch (error) {
        console.error('Помилка:', error);
        document.getElementById('dogContainer').innerHTML = '<p>Не вдалося отримати фото 😢</p>';
    }
}

// Додаємо обробник події на кнопку
document.getElementById('getDogBtn').addEventListener('click', getDogImage);
