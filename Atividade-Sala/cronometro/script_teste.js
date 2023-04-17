let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

function updateVisualization() {
  if ((milliseconds += 10) == 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("horas").innerText = returnData(hours);
  document.getElementById("minutos").innerText = returnData(minutes);
  document.getElementById("segundos").innerText = returnData(seconds);
  document.getElementById("milissegundo").innerText = returnData(milliseconds);
}

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

function timer() {
  if ((milliseconds += 10) == 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("horas").innerText = returnData(hours);
  document.getElementById("minutos").innerText = returnData(minutes);
  document.getElementById("segundos").innerText = returnData(seconds);
  document.getElementById("milissegundo").innerText = returnData(milliseconds);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`;
}
