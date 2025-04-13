function isYearLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "yes";
    }
    else {
        return "no";
    }
}
console.log(isYearLeap(1984));
console.log(isYearLeap(2003));
console.log(isYearLeap(4));