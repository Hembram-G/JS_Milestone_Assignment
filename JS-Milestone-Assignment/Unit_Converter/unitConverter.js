function celsiusToFahrenheit(celsius) {
    
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const celsiusTemperature = 20;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
