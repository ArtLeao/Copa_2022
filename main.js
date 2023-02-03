//coloca a informação dos times que vão jogar, junto do horário da partida que serão passados por parâmetro
function criaJogos(jogador1, hora, jogador2) {
  return `                                     
    <li>
      <img src="./assets/icon_${jogador1}.svg">
      <strong>${hora}</strong>
      <img src="./assets/icon_${jogador2}.svg">
    </li>
  `
}

//cria uma variável global que serve como ponto de partida para a transição da animação (só é executada uma vez)
let delay = -0.3

function criaCartão(data, dia, jogos) {
  //a cada vez que esta função (para cada cartão criado)for chamada, o programa vai adicionar mais 0.3 segundos tornando a execução dos cartões um pouco mais demorada e dinâmica
  delay = delay + 0.3

  //cria os cartões informando a data dos jogos e o dia da semana
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${data} <span>${dia}</span></h2>
        <ul>
            ${jogos}
        </ul>
    </div>
  `
}

//parte que cria de fato os cartões, chamando a função criaCartão que, por sua vez, vai criar os cartões com o dia do mês e dia de semana do jogo, ela recebe três parâmetros e, em um deles, será chamado a função criaJogos que será responsável por colocar a informação de cada jogo na página
document.querySelector("#cards").innerHTML =

  criaCartão("20/11", "domingo", criaJogos("catar", "13:00", "equador")) +
  criaCartão("21/11", "segunda", criaJogos("inglaterra", "07:00", "iran") +
    criaJogos("senegal", "13:00", "holanda") +
    criaJogos("estados_unidos", "13:00", "gales")) +
  criaCartão("22/11", "terça", criaJogos("argentina", "07:00", "saudita") +
    criaJogos("dinamarca", "10:00", "tunisia") +
    criaJogos("mexico", "13:00", "polonia") +
    criaJogos("franca", "16:00", "australia")) +
  criaCartão("23/11", "quarta", criaJogos("marrocos", "07:00", "croacia") +
    criaJogos("alemanha", "10:00", "japan") +
    criaJogos("espanha", "13:00", "rica") +
    criaJogos("belgium", "16:00", "canada")) +
  criaCartão("24/11", "quinta", criaJogos("suica", "07:00", "camaroes") +
    criaJogos("uruguai", "10:00", "korea_sul") +
    criaJogos("portugal", "13:00", "ghana") +
    criaJogos("brasil", "16:00", "serbia")) +
  criaCartão("25/11", "sexta", criaJogos("gales", "07:00", "iran") +
    criaJogos("catar", "10:00", "senegal") +
    criaJogos("holanda", "13:00", "equador") +
    criaJogos("inglaterra", "16:00", "estados_unidos")) +
  criaCartão("26/11", "sábado", criaJogos("tunisia", "07:00", "australia") +
    criaJogos("polonia", "10:00", "saudita") +
    criaJogos("franca", "13:00", "dinamarca") +
    criaJogos("argentina", "16:00", "mexico")) +
  criaCartão("27/11", "domingo", criaJogos("japan", "07:00", "rica") +
    criaJogos("belgium", "10:00", "marrocos") +
    criaJogos("croacia", "13:00", "canada") +
    criaJogos("espanha", "16:00", "alemanha")) +
  criaCartão("28/11", "segunda", criaJogos("camaroes", "07:00", "serbia") +
    criaJogos("korea_sul", "10:00", "ghana") +
    criaJogos("brasil", "13:00", "suica") +
    criaJogos("portugal", "16:00", "uruguai")) +
  criaCartão("29/11", "terça", criaJogos("holanda", "12:00", "catar") +
    criaJogos("equador", "12:00", "senegal") +
    criaJogos("iran", "16:00", "estados_unidos") +
    criaJogos("gales", "16:00", "inglaterra")) +
  criaCartão("30/11", "quarta", criaJogos("tunisia", "12:00", "franca") +
    criaJogos("australia", "12:00", "dinamarca") +
    criaJogos("polonia", "16:00", "argentina") +
    criaJogos("saudita", "16:00", "mexico")) +
  criaCartão("01/12", "quinta", criaJogos("croacia", "12:00", "belgium") +
    criaJogos("canada", "12:00", "marrocos") +
    criaJogos("japan", "16:00", "espanha") +
    criaJogos("rica", "16:00", "alemanha")) +
  criaCartão("02/12", "sexta", criaJogos("korea_sul", "12:00", "portugal") +
    criaJogos("ghana", "12:00", "uruguai") +
    criaJogos("brasil", "16:00", "camaroes") +
    criaJogos("serbia", "16:00", "suica"))

