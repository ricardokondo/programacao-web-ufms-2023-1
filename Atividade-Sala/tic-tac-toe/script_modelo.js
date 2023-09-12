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
const winConditions = [];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

// Chamada da função para inicializar o jogo
initializeGame();

// Insira aqui a função para a inicialização do jogo
function initializeGame() {}

// Função para a verificação do clique para adicionar o valor e verifica o vencedor.
function cellClicked() {}

// Função para atualizar visualização da informação
function updateCell(cell, index) {}

// Função para escolha e alternância de jogadores
function changePlayer() {}

//Função para verificar o vencedor
function checkWinner() {}

// Função para resert das informações da tela
function restartGame() {}
