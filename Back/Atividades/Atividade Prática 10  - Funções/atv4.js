/* 1. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.

Ex:
Entrada: 3672
Saída: 1:1:12 */

function relogio (tempoEmSegundos){
  
  let horas;
  let minutos;
  let segundos;
  
  horas = Math.floor(tempoEmSegundos/3600);
  tempoEmSegundos -= horas*3600;
  
  minutos = Math.floor(tempoEmSegundos / 60);
  tempoEmSegundos -= minutos*60;
  
  segundos = tempoEmSegundos;

  return `${horas}:${minutos}:${segundos}`;
}


console.log(relogio(8451));