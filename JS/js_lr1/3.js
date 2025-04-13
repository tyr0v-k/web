function divCheck(number) {
    if (number % 10 === 0) {
        return "Число делится на 10";
    }
    else if (number % 7 === 0) {
        return "Число делится на 7";
    }
    else if (number % 6 === 0) {
        return "Число делится на 6";
    }
    else if (number % 3 === 0) {
        return "Число делится на 3";
    }
    else if (number % 2 === 0) {
        return "Число делится на 2";
    }
    else {
        return "Не делится";
    }
}
console.log(divCheck(30));
console.log(divCheck(15));
console.log(divCheck(12));
console.log(divCheck(1643));