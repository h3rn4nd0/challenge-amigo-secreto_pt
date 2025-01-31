let listaAmigos = [];

function fAdicionarAmigo() {
  let amigo = document.querySelector('input').value;
  if (amigo == "") {
    alert("Por favor, insira um nome.");
  } else {
    listaAmigos.push(amigo);
  fLimparInput();
  //let ami = listaAmigos[listaAmigos.length - 1];
  
  let novoItem = document.createElement('li');
  novoItem.textContent = amigo;
  
  document.getElementById('listaAmigos').appendChild(novoItem);
  }
}
function fLimparInput() {
  let campo = document.querySelector('input');
  campo.value = ('');
}

function fExibirNomes(tag, texto) {
  campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function fSortearAmigo() {
  let indice = parseInt(Math.random()*listaAmigos.length);
  let resultado = `Seu amigo secreto sorteado é: ${listaAmigos[indice]}`;
  fExibirNomes('ul', resultado);
}
