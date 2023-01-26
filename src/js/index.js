const personagens = document.querySelectorAll('.personagem')

console.log(personagens);

personagens.forEach((personagem)=>{
    personagem.addEventListener('mouseenter',()=>{
        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemPlayer1 = document.getElementById('personagem-player-1');
        imagemPlayer1.src = `./src/imagens/${idSelecionado}.png`;

        const nomePlayer1 = document.getElementById('nome-player-1');
        
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomePlayer1.innerHTML = nomeSelecionado;
    })
})