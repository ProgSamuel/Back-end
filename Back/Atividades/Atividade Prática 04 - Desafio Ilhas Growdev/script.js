var nota50 = 0;
var nota10 = 0;
var nota5 = 0;
var nota1 = 0;
var valorSaque = Number(prompt("Digite o valor que deseja sacar:"));

while (valorSaque >= 50) {
  valorSaque -= 50;
  nota50++;
}
while (valorSaque >= 10) {
  valorSaque -= 10;
  nota10++;
}
while (valorSaque >= 5) {
  valorSaque -= 5;
  nota5++;
}
while (valorSaque >= 1) {
  valorSaque -= 1;
  nota1++;
}

console.log(
  `Serão necessários  ${nota50} notas de GC$50, ${nota10} notas de GC$10, ${nota5} notas de GC$5 e ${nota1} notas de GC$1`
);