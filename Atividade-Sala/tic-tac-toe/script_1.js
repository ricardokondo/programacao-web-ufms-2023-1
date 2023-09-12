/*
 *  Script com a lógica do Jogo da Velha
 *  Ele possui o esqueleto dos método essenciais.
 *
 *  DICAS GERAIS:
 *  - Modifique este arquivo o quanto for necessário.
 */

/*Declaração de uma variável que retorna uma lista de elementos presentes no documento 
* que coincidam com o grupo de seletores especificado. 
O objeto retornado é uma NodeList.  
*/
const cells = document.querySelectorAll(".cell");

//Variável que retorna o valor selecionado do statusText
const statusText = document.querySelector("#statusText");

/*Insira aqui as condições de vitória, para isso utilize a lógica do funcionamento
 * do jogo da velha
 */
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

// Chamada da função para inicializar o jogo
initializeGame();

// Insira aqui a função para a inicialização do jogo
function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  statusText.textContent = "Vez do jogador " + `${currentPlayer}`;
  running = true;
}

// Função para a verificação do clique para adicionar o valor e verifica o vencedor.
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] != "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  checkWinner();
}

// Função para atualizar visualização da informação
function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

// Função para escolha e alternância de jogadores
function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  statusText.textContent = "Vez do jogador " + `${currentPlayer}`;
}

//Função para verificar o vencedor
function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    statusText.textContent = "O jogador " + `${currentPlayer}` + " venceu!!";
    running = false;
  } else if (!options.includes("")) {
    statusText.textContent = "Empatou!!";
    running = false;
  } else {
    changePlayer();
  }
}

// Função para resert das informações da tela
function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = "Vez do jogador " + `${currentPlayer}`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}
