// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  /* criar variaveis para receber as somas */
  let somaTaxa = 0;
  let somaRecebimento = 0;

  transacoes.forEach((item) => {

        /* quebrar o item em array */
        itemArray = item.descricao.split(' ');
        /* formatar o valor*/
        item.valor = item.valor.replace('R$ ', '');
        item.valor = Number(item.valor)

        /* verificar o tipo */
        if(itemArray[0] == "Taxa"){
            somaTaxa += item.valor;
        } else {
            somaRecebimento += item.valor;
        }
    })

    console.log(somaTaxa);
    console.log(somaRecebimento);
    
/* ================================================= */
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
    console.log(transportes.split(';'));

/* ================================================= */

  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  const arrayHtml = html.split('span');
  const novoHtml = arrayHtml.join('a');

  console.log(novoHtml);

/* ================================================= */

  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase[frase.length - 1]);
    /* ou */
    // console.log(frase.slice(-1));
  
/* ================================================= */

  // Retorne o total de taxas
  const transacoes1 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  let totalTaxas = 0;
  transacoes1.forEach((item) => {
    /* formatar elemento */
    item = item.trim();
    /* quebrar o item em array */
    item = item.split(' ');
    /* verificar se é taxa */
    if(item[0].toLowerCase() === 'taxa'){
        totalTaxas++;
    }
})
  console.log(totalTaxas)
  