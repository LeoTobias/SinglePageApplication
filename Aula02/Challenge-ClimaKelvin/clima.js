// Passo 1: Definindo a temperatura em Kelvin
const kelvin = 293;

// Passo 3: Convertendo Kelvin para Celsius
const celsius = kelvin - 273;

// Passo 5: Calculando Fahrenheit e arredondando
const fahrenheit = Math.floor(celsius * (9/5) + 32);

// Passo 9: Exibindo a temperatura em Fahrenheit
console.log(`A temperatura é ${fahrenheit} graus Fahrenheit`);

// Passo 11: Convertendo 0 Kelvin para Fahrenheit
const zeroKelvinFahrenheit = Math.floor((0 - 273) * (9/5) + 32);
console.log(`0 Kelvin é igual a ${zeroKelvinFahrenheit} graus Fahrenheit`);

// Passo 12: Convertendo Celsius para Newton
const newton = Math.floor(celsius * (33/100));
console.log(`A temperatura em Newton é ${newton} graus Newton`);
