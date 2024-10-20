// script.js

document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemperature;
    let unitSymbol;

    // Validate input
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number.');
        return;
    }

    // Conversion logic
    switch (unit) {
        case 'C':
            convertedTemperature = (temperatureInput * 9/5) + 32; // Celsius to Fahrenheit
            unitSymbol = '°F';
            break;
        case 'F':
            convertedTemperature = (temperatureInput - 32) * 5/9; // Fahrenheit to Celsius
            unitSymbol = '°C';
            break;
        case 'K':
            convertedTemperature = temperatureInput - 273.15; // Kelvin to Celsius
            unitSymbol = '°C';
            break;
        default:
            alert('Please select a valid unit.');
            return;
    }

    // Display result
    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unitSymbol}`;
});
