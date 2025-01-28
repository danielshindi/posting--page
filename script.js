const renderizadorTitulo = document.querySelector("#renderizador-titulo");
const renderizadorConteudo = document.querySelector("#renderizador-conteudo");

const form = document.querySelector("#form");
const postView = document.querySelector('#post-view');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const titulo = document.querySelector('#titulo');
    const conteudo = document.querySelector('#conteudo');

    const data = {
        title: titulo.value,
        body: conteudo.value, 
        userId:1
    }

    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(response => {
        if (!response.ok) {
            return new Error('Falhou a requisição');
        }
        return response.json();
    }).then(data => {
        renderizadorTitulo.innerHTML = data.title;
        renderizadorConteudo.innerHTML = data.body;

        postView.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
        })

    }).catch(err => {
        console.log(err.message);
    })

});