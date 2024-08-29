document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemperature;
    let resultText;

    if (isNaN(temperature)) {
        resultText = "Please enter a valid number!";
    } else {
        if (selectedUnit === 'celsius') {
            convertedTemperature = (temperature * 9/5) + 32;
            resultText = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
        } else if (selectedUnit === 'fahrenheit') {
            convertedTemperature = (temperature - 32) * 5/9;
            resultText = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
        } else if (selectedUnit === 'kelvin') {
            convertedTemperature = temperature + 273.15;
            resultText = `${temperature}°C is ${convertedTemperature.toFixed(2)}K`;
        }
    }

    document.getElementById('result').textContent = resultText;
});
