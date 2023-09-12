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
 *  atualize o HTML chamando o método "document.getElementById". Para isso,
 *  finalize a implementação simplesmente colocando os valores dentro dos elementos
 *  usando do atributo innerHTML ou innerText dos elementos retornados.
 *
 *  Essa atualização deve ser feita usando o método 'setInterval' a pelo menos 10ms.
 *  Esse método retorna uma referência tal que pode ser usada por 'clearInterval'
 *  para interromper a execução a qualquer momento.
 */

/*1. Variáveis de Controle:
   - "hours", "minutes", "seconds" e "milliseconds" são variáveis globais que mantêm o tempo atual no cronômetro.
   - "interval" é uma variável global que será usada para armazenar a referência ao intervalo que atualiza o cronômetro a cada 10 milissegundos.*/

// TODO (implementar)

/*
2. Função "start()":
   - A função "start()" é chamada quando o usuário deseja iniciar o cronômetro, quando o botão 'Iniciar' é clicado.
   - Primeiro, a função "stop()" é chamada para garantir que qualquer intervalo de atualização anterior seja cancelado.
   - Em seguida, um novo intervalo é configurado usando "setInterval". Ele chama a função "timer()" a cada 10 milissegundos (ou seja, a cada 10 milissegundos, o cronômetro é atualizado).
    - Dica: use do método 'setInterval' para executá-lo
*/
function start() {
  // TODO (implementar)
}

/* 3. Função "reset()":
   - A função "reset()" é chamada quando o usuário deseja redefinir o cronômetro, ou seja, quando o botão 'Reiniciar' é clicado:
    - se o cronometro estiver ativo, reiniciar contagem
    - se estiver parado, zerar e permanecer zerado
   - Ela começa por cancelar qualquer intervalo de atualização existente usando "clearInterval(interval)".
   - Em seguida, todas as variáveis de controle (horas, minutos, segundos e milissegundos) são redefinidas para zero.
   - Também são atualizadas as informações de exibição no HTML, definindo o conteúdo dos elementos com IDs "horas", "minutos", "segundos" e "milissegundo" para "00", de modo que o cronômetro seja reiniciado.
*/
function reset() {
  // TODO (implementar)
}

/* 4. Função "stop()":
   - A função "stop()" é chamada quando o usuário deseja parar o cronômetro, ou seja, quando o botão 'Parar' é clicado:
      - se o cronometro estiver ativo, parar na contagem atual.
   - Ela simplesmente cancela o intervalo de atualização existente usando "clearInterval(interval)".
 */
function stop() {
  // TODO (implementar)
}

/*5. Função "timer()":
   - A função "timer()" é chamada a cada 10 milissegundos pelo intervalo configurado na função "start()".
   - Ela incrementa a variável "milliseconds" em 10 a cada chamada.
   - Se "milliseconds" atingir 1000 (1 segundo), a variável "seconds" é incrementada em 1 e "milliseconds" é redefinida para zero. Isso é repetido para os minutos e as horas, se necessário.
   - Em seguida, os elementos HTML com IDs "horas", "minutos", "segundos" e "milissegundo" são atualizados com os valores atuais do cronômetro usando as funções auxiliares para garantir que sejam exibidos com duas ou três casas decimais, conforme necessário.
   - Basta implementar a lógica e alterar o conteúdo (innerText ou innerHTML) com os valores */
function timer() {
  // TODO (implementar)
}
