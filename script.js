const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert');
const resetButton = document.getElementById('reset');
const reverseButton = document.getElementById('reverse');
const calculationText = document.getElementById('calculation-text');

let isCelsiusToFahrenheit = true; // Initial conversion direction

convertButton.addEventListener('click', () => {
  let celsius, fahrenheit;

  if (isCelsiusToFahrenheit) {
    celsius = parseFloat(celsiusInput.value);
    fahrenheit = (celsius * 9 / 5) + 32;
    convertButton.textContent = 'Konversi (F → C)'; // Update button text for clarity
    calculationText.textContent = `${celsius}°C x (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
  } else {
    fahrenheit = parseFloat(fahrenheitInput.value);
    celsius = (fahrenheit - 32) * 5 / 9;
    convertButton.textContent = 'Konversi (C → F)'; // Update button text
    calculationText.textContent = `${fahrenheit}°F - 32 x (5/9) =${celsius.toFixed(2)}°C `;
  }

  fahrenheitInput.value = fahrenheit.toFixed(2); // Display result with 2 decimal places
});

resetButton.addEventListener('click', () => {
  celsiusInput.value = 0;
  fahrenheitInput.value = 0;
  calculationText.textContent = '';
});

reverseButton.addEventListener('click', () => {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  if (isCelsiusToFahrenheit) {
    convertButton.textContent = 'Konversi'; 
    calculationText.textContent = 'Cara Kalkulasi:'; 
  } else {
    convertButton.textContent = 'Ubah Kembali'; 
  }
});
