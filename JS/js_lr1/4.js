function calculatePrice(people, group, day) {
    const prices = {
        "Студенты": { "Пятница": 8.45, "Суббота": 9.80, "Воскресенье": 10.46 },
        "Корпоративная": { "Пятница": 10.90, "Суббота": 15.60, "Воскресенье": 16 },
        "Обычная": { "Пятница": 15, "Суббота": 20, "Воскресенье": 22.50 }
    };
    let price = people * prices[group][day];

    if (group === "Студенты" && people >= 30) {
        price *= 0.85;
    }
    else if (group === "Корпоративная" && people >= 100) {
        price -= prices[group][day] * 10;
    }
    else if (group === "Обычная" && people >= 10 && people <= 20) {
        price *= 0.95;
    }
    return `Общая цена: ${price.toFixed(2)}`;
}
console.log(calculatePrice(30, "Студенты", "Воскресенье"));
console.log(calculatePrice(40, "Обычная", "Суббота"));