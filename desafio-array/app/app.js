const clientes = [];
const cores = [];
const btAdicionar = document.getElementById("btAdicionar");
const btAtender = document.getElementById("btAtender");

let inCliente = document.getElementById("inCliente");
let inColor = document.getElementById("inColor");
let listaEsperaClientes = document.getElementById("listaEsperaClientes");

function adicionarCliente() {
  let nome = inCliente.value;
  let cor = inColor.value;

  if (nome === "" || cor === "") {
    alert("Valor inválido!");
    inCliente.focus();
    return;
  }

  //Adicionando os itens ao final do array
  clientes.push(nome);
  cores.push(cor);

  let index = 0;
  let lista = "";
  let coresLista = "";

  //lendo os elementos do vetor

  for (index = 0; index < clientes.length; index++) {
    lista += clientes[index] + "\n";
    coresLista += cores[index] + "\n";
  }

  const element = document.createElement("div");

  //capturando o primeiro elemento
  const node = document.createTextNode(clientes.slice(-1).pop());
  const node2 = document.createTextNode(
    "                                " + index
  );
  element.appendChild(node);
  element.appendChild(node2);

  listaEsperaClientes.appendChild(element);
  element.style.color = cor;
  //limpando o campo e posicionando cursor em inCliente
  inCliente.value = "";
  inCliente.focus();
}

btAdicionar.addEventListener("click", adicionarCliente);

function atenderClientes() {
  if (clientes.length === 0) {
    alert("Não há clientes na lista de espera");
    inCliente.focus();
    return;
  }

  //removendo o primeiro elemento do vetor
  const atender = clientes.shift();

  let index = 0;
  let lista = "";

  for (index = 0; index < clientes.length; index++) {
    lista += index + 1 + ". " + clientes[index] + "\n";
  }

  const element = document.querySelector("div");

  element.parentNode.removeChild(element);
}

btAtender.addEventListener("click", atenderClientes);
