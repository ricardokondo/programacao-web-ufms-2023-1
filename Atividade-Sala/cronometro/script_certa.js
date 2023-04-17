/*
 *  Script com a lógica do cronometro.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um cronômetro de duas formas.
 *  1. Armazenar os milisegundos, segundos, minutos e horas e incrementar
 *     cada uma destas unidades quando necessário. Lembre-se que se milisegundos
 *     exceder 999 você deve incrementar uma unidade em segundos e assim continua.
 *  2. Você pode armazenar somente os milisegundos e incrementá-lo quando necessário.
 *     Após isso, você consegue obter horas minutos e segundos usando simples fórmulas
 *     matemáticas.
 *
 *  Depois de computar os valores de milisegundos, segundos, minutos e horas,
 *  atualize o HTML chamando o método updateVisualization(). Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo innerHTML dos elementos retornados.
 *
 *  Essa atualização deve ser feita usando o método 'setInterval' a pelo menos 10ms.
 *  Esse método retorna uma referência tal que pode ser usada por 'clearInterval'
 *  para interromper a execução a qualquer momento.
 */

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

// Função executada quando o botão 'Iniciar' é clicado
// - se o cronometro estiver parado, iniciar contagem.
// - se estiver ativo, reiniciar a contagem
function start() {
  stop();
  interval = setInterval(() => {
    timer(), 10;
  });
}

// Função executada quando o botão 'Reiniciar' é clicado
// - se o cronometro estiver ativo, reiniciar contagem
// - se estiver parado, zerar e permanecer zerado
function reset() {
  // zerar o intervalo
  clearInterval(interval);
  // zerar as variáveis
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  // zerar as informações de apresentação do display
  document.getElementById("horas").innerText = "00";
  document.getElementById("minutos").innerText = "00";
  document.getElementById("segundos").innerText = "00";
  document.getElementById("milissegundo").innerText = "000";
}

// Função executada quando o botão 'Parar' é clicado
// - se o cronometro estiver ativo, parar na contagem atual
function stop() {
  clearInterval(interval);
}

// Função para atualizar o display do cronometro no html.
// Dica: use do método 'setInterval' para executá-lo a cada 50 milissegundos.
// As próximas linhas buscam pelos respectivos espaços de hora, minuto, segundo e milissegundos
// Basta implementar a lógica e alterar o conteúdo (innerText) com os valores

function timer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    seconds++;
    milliseconds = 0;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
      if (minutes == 60) {
        hours++;
        minutes = 0;
      }
    }
  }

  document.getElementById("horas").innerText = twoDigits(hours);
  document.getElementById("minutos").innerText = twoDigits(minutes);
  document.getElementById("segundos").innerText = twoDigits(seconds);
  document.getElementById("milissegundo").innerText = threeDigits(milliseconds);
}

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function threeDigits(digit) {
  if (digit < 100) {
    return `${digit}`.padStart(3, "0");
  } else {
    return digit;
  }
}
