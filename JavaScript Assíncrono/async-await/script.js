async function puxarDados() {
  const promiseDados =  fetch('./dados.json');
  const responseCliente = fetch('./clientes.json');
  
  // const promiseDados =  fetch('./dados.json');
  //const responseDados = await promiseDados;
  // const jsonDados = await responseDados.json(); é o mesmo que está sendo feito com:

  const jsonDados = await (await promiseDados).json();
  const jsonClientes = await (await responseCliente).json();
  document.body.innerText = jsonDados.aula;

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados()

async function aysncComPromise() {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('Depois de 1s');
      resolve();
    }, 1000);
  })
  console.log('acabou')
}

aysncComPromise();

async function aysncSemPromise() {
  await setTimeout(() => console.log('DEPOIS DE 1S'), 1000);
  console.log('ACABOU')
}

aysncSemPromise();