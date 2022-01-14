export default function initFuncionamento() {

  const funcionamento = document.querySelector('[data-semana]');
  //MACETE: usar o map em um array de string com o construtor number retorna uma nova array de números
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  
  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horarioAtual = dataAtual.getHours();
  
  const diaSemanaAberto = diasSemana.indexOf(diaAtual) !== -1;
  const horarioAberto = (horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1]);
  
  if(diaSemanaAberto && horarioAberto){
    funcionamento.classList.add('aberto');
  }
  
  console.log(diaAtual);
  console.log(horarioAtual);
  console.log(horarioAberto);
}
