// Formulário de contato
const form = document.getElementById('formContato');
const resposta = document.getElementById('resposta');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    resposta.innerHTML = `<p>Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. ✅</p>`;

    form.reset();
});