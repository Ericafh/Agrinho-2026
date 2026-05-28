/* =========================
ARQUIVO: script.js
========================= */

const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event){

  event.preventDefault();

  mensagem.innerHTML =
    "✅ Mensagem enviada com sucesso! Obrigado por apoiar o AgroForte.";

  formulario.reset();

});

/* EFEITO MENU */

const links = document.querySelectorAll("nav a");

links.forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const id = this.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior:"smooth"
    });

  });

});