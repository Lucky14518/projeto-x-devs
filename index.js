

var cartaoAtual = 0;

const cartoes = document.querySelectorAll('.cartao');
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual < cartoes.length - 1) {
        cartoes[cartaoAtual].classList.remove('selecionado');
        cartaoAtual++;
        cartoes[cartaoAtual].classList.add('selecionado');
    }
})

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual > 0) {
        cartoes[cartaoAtual].classList.remove('selecionado');
        cartaoAtual--;
        cartoes[cartaoAtual].classList.add('selecionado');
    }
})

