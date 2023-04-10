let elementoResultado = document.querySelector(".js-resultado");
let botaoAC = document.querySelector(".js-btn-ac");
let botaoMaisMenos = document.querySelector(".js-btn-mais-menos");
let botaoDeletar = document.querySelector(".js-btn-del");
let botoesPadroes = document.querySelectorAll(".js-btn-padroes");
let botaoResultado = document.querySelector(".js-btn-igual");

function adicionaElementoAoInputResultado(numeroDigitado) {
  verificarSimboloDuplicado(numeroDigitado);
  if (verificaSimboloInicial(numeroDigitado)) return;
  elementoResultado.value += numeroDigitado;
}

function verificaSimboloInicial(numeroDigitadoRecebidoPorParametro) {
  if (
    elementoResultado.value.length == 0 &&
    !Number(numeroDigitadoRecebidoPorParametro)
  ) {
    return true;
  }
}

function verificarSimboloDuplicado(numeroDigitadoRecebidoPorParametro) {
  let ultimoValorNoInputResultado =
    elementoResultado.value[elementoResultado.value.length - 1];

  //console.log("==================");
  //console.log(ultimoValorNoInputResultado, elementoResultado.value.length);

  if (
    ultimoValorNoInputResultado &&
    !Number(ultimoValorNoInputResultado) &&
    !Number(numeroDigitadoRecebidoPorParametro) &&
    numeroDigitadoRecebidoPorParametro != 0 &&
    ultimoValorNoInputResultado != 0
  ) {
    //console.log("Entrou");
    deletarUltimaLetraDoResultado();
  }
}

function executarCalculo() {
  try {
    elementoResultado.value = eval(elementoResultado.value);
  } catch {
    alert("Algo deu errado. Tente novamente");
  }
}

function limparResultado() {
  elementoResultado.value = "";
}

function trocarSinalDaConta() {
  if (Number(elementoResultado.value)) {
    elementoResultado.value = elementoResultado.value * -1;
  }
}

function deletarUltimaLetraDoResultado() {
  elementoResultado.value = elementoResultado.value.slice(0, -1);
}

function gerenciarEscutadores() {
  botoesPadroes.forEach((elementoCorrente) => {
    elementoCorrente.addEventListener("click", () => {
      let valorDoElementoClicado = elementoCorrente.dataset.valor;
      /*console.log("==================");
    console.log(valorDoElementoClicado);*/
      adicionaElementoAoInputResultado(valorDoElementoClicado);
    });
  });

  botaoResultado.addEventListener("click", () => {
    executarCalculo();
  });

  botaoAC.addEventListener("click", () => {
    limparResultado();
  });

  botaoMaisMenos.addEventListener("click", () => {
    trocarSinalDaConta();
  });

  botaoDeletar.addEventListener("click", () => {
    deletarUltimaLetraDoResultado();
  });
}

gerenciarEscutadores();
