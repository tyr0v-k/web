function subtract() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const res = firstNumber - secondNumber;
    document.getElementById('result').textContent = res;
}