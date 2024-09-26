const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la temperatura en grados Celsius: ', (entrada) => {
  if (!isNaN(parseFloat(entrada)) && isFinite(entrada)) {
    convertirTemperatura(parseFloat(entrada));
  } else {
    console.error('Error: La temperatura debe ser un número');
    rl.question('Ingrese la temperatura en grados Celsius: ', (entradaAgain) => {
      if (!isNaN(parseFloat(entradaAgain)) && isFinite(entradaAgain)) {
        convertirTemperatura(parseFloat(entradaAgain));
      } else {
        console.error('Error: La temperatura debe ser un número');
      }
    });
  }
  rl.close();
});

function convertirTemperatura(gradosCelsius) {
  if (typeof gradosCelsius !== 'number') {
    console.error('Error: La temperatura debe ser un número');
    return;
  }
  const gradosFahrenheit = (gradosCelsius * 9/5) + 32;
  const gradosKelvin = gradosCelsius + 273.15;
  console.log(`Grados Kelvin: ${gradosKelvin.toFixed(2)}`);
  console.log(`Grados Fahrenheit: ${gradosFahrenheit.toFixed(1)}`);
}