export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    //MACETE: usar o map em um array de string com o construtor number retorna uma nova array de números
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAtuais() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horarioAtual = this.dataAtual.getUTCHours() - 3;
  }

  estaAberto() {
    const diaSemanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    const horarioAberto =
      this.horarioAtual >= this.horarioSemana[0] &&
      this.horarioAtual < this.horarioSemana[1];
    return diaSemanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      //preciso ativar as funções para que os valores referenciados sejam preenchidos
      this.dadosFuncionamento();
      this.dadosAtuais();
      this.ativaAberto();
    }
    return this;
  }
}
