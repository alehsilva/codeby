export function numberToReal(number: any) {
  const num = number / 100;
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}