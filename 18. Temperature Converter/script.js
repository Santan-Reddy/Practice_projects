const celsiusEl = document.getElementById('Celsius');
const fahrenheitEl = document.getElementById('Fahrenheit');
const kelvinEl = document.getElementById('Kelvin');
celsiusEl.value = 0


function computeTemp(event) {
    const currentValue = +(event.target.value);
    // const currentValue = Number(event.target.value);
    console.log(currentValue)

    switch (event.target.name) {
        case "Celsius":
            kelvinEl.value = (currentValue + 273.15).toFixed(2);
            fahrenheitEl.value = ((currentValue * 9 / 5) + 32).toFixed(2);
            break;
        case "Fahrenheit":
            kelvinEl.value = (((currentValue - 32) / 1.8) + 273.15).toFixed(2);
            celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            break;
        case "Kelvin":
            celsiusEl.value = (currentValue - 273.15).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
            break;

        default:
            break;
    }
}