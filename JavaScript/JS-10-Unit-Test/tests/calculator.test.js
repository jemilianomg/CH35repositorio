const calculator = require('../modules/calculator.js');

//Primer test para la suma 
test ('La suma de dos numeros y el valor resultante', () => {
    expect(calculator.sum(10,20)).toBe(30);
});