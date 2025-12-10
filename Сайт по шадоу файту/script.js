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
