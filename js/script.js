const arrayOfhealthWishes = [
  "Пий більше води.",
  "Регулярно рухайся.",
  "Спи не менше 7-8 годин на добу.",
  "Їж більше овочів і фруктів.",
  "Зменшуй споживання цукру.",
  "Уникай стресів.",
  "Мий руки після вулиці та перед їжею.",
  "Займайся фізичними вправами кожного дня.",
  "Не зловживай алкоголем.",
  "Проводь більше часу на свіжому повітрі.",
  "Робіть регулярні медичні обстеження.",
  "Контролюй вагу.",
  "Не кури.",
  "Підтримуй нормальний рівень холестерину.",
  "Робіть перерви під час роботи на комп'ютері.",
  "Слухай своє тіло і не ігноруй симптоми хвороб.",
  "Використовуй сонцезахисний крем на вулиці.",
  "Практикуй техніки розслаблення, такі як медитація.",
  "Підтримуй позитивний настрій.",
  "Не забувай про гігієну сну.",
];

let countOfPills = 5;
document.getElementById("count-of-tablets").innerText = "💊".repeat(
  countOfPills
);

document.getElementById("btn_health_wishes").addEventListener("click", () => {
  let index = Math.floor(Math.random() * arrayOfhealthWishes.length);
  document.getElementById("p-health-wishes").innerText =
    arrayOfhealthWishes[index];

  countOfPills--;
  console.log(countOfPills);

  document.getElementById("count-of-tablets").innerText =
    "💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills);
  console.log("💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills));

  if (countOfPills == 0) {
    console.log("countOfPills = 0");

    document.getElementById("btn_health_wishes").style.display = "none";
  }
});

document.getElementById("btn-buy-tablets").addEventListener("click", () => {
  countOfPills = 5;
  console.log(countOfPills);

  document.getElementById("count-of-tablets").innerText = "💊".repeat(
    countOfPills
  );

  document.getElementById("btn_health_wishes").style.display = "inline-block";
});
