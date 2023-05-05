const celsiusEl = document.getElementById('Celsius');
const fahrenheitEl = document.getElementById('Fahrenheit');
const kelvinEl = document.getElementById('Kelvin');
console.log(celsiusEl.value)

celsiusEl.addEventListener('change', celsiusToFahrenheit());







function celsiusToFahrenheit() {
    fahrenheitEl.value = (celsiusEl.value * 9 / 5) + 32

}