let calculadora = {
  somar: function (a, b) {
    return a + b;
  },

  subtrair: function (a, b) {
    return a - b;
  },

  dividir: function (a, b) {
    return a / b;
  },

  multiplicar: function (a, b) {
    return a * b;
  },
};

console.log(calculadora.somar(3, 9));
console.log(calculadora.subtrair(12, 2));
console.log(calculadora.dividir(36, 6));
console.log(calculadora.multiplicar(3, 6));
