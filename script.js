const form = document.getElementById('formAgro');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dados = {
        umidade: document.getElementById('umidade').value,
        temperatura: document.getElementById('temperatura').value,
        ph: document.getElementById('ph').value,
        sustentabilidade: document.getElementById('sustentabilidade').value
    };

    const resposta = await fetch('http://127.0.0.1:5000/monitoramento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();

    document.getElementById('resultado').innerHTML =
        `<p>${resultado.mensagem}</p>`;
});