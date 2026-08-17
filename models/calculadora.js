function somar(numero1, numero2) {
  const resultado = numero1 + numero2;
  if (typeof resultado === "string") {
    return "ERROR";
  }
  return resultado;
}

exports.somar = somar;
