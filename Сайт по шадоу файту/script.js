// Функція для перевірки даних форми
document.getElementById("authForm").addEventListener("submit", function(event) {
    event.preventDefault(); // запобігаємо перезавантаженню сторінки

    // Отримуємо значення з полів форми
    let login = document.getElementById("login").value.trim();
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
