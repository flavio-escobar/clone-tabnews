const calculadora = require("../../models/calculadora.js");

test("deve somar dois números", () => {
  const resultado = calculadora.somar(1, 1);
  console.log(resultado);
  expect(resultado).toBe(2);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  console.log(resultado);
  expect(resultado).toBe(105);
});
test("somar 'banana' + 100 deveria retornar 'ERROR'", () => {
  const resultado = calculadora.somar("banana", 100);
  console.log(resultado);
  expect(resultado).toBe("ERROR");
});
