const form = document.getElementById('isbnForm');
const inputISBN = document.getElementById('isbn');
const mensagem = document.getElementById('mensagem');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isbn = inputISBN.value.trim();

    mensagem.textContent = '';
    resultado.innerHTML = '';

    if (!/^\d{10,13}$/.test(isbn)) {
        mensagem.textContent = 'Por favor, insira um ISBN válido (10 ou 13 dígitos).';
        return;
    }

    try {
        const resposta = await fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}`);

        if (!resposta.ok) {
            throw new Error('Livro não encontrado. Verifique o ISBN e tente novamente.');
        }

        const dados = await resposta.json();

        resultado.innerHTML = `
            <h2>Informações do Livro</h2>
            <p><strong>Título:</strong> ${dados.title}</p>
            <p><strong>Subtítulo:</strong> ${dados.subtitle || 'N/A'}</p>
            <p><strong>Autores:</strong> ${dados.authors.join(', ')}</p>
            <p><strong>Editora:</strong> ${dados.publisher}</p>
            <p><strong>Idioma:</strong> ${dados.language}</p>
            <p><strong>Publicação:</strong> ${dados.published}</p>
            <p><strong>ISBN:</strong> ${dados.isbn}</p>
        `;
    } catch (erro) {
        mensagem.textContent = erro.message;
    }
});
