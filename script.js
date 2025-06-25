

function enviarWhatsapp(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511949092368';

      // Validação de campos

      if (!nome || !mensagem) {
        alert('Por favor, preencha todos os campos.')
        return;
    }

    const textoMensagem =  'Olá! Me chamo ${nome}, ${mensagem}';
    const msgFormatada = encodeURIComponent(textoMensagem);

    const urlWhatsapp = 'https://wa.me/${telefone}?text=${msgFormatada}'

    window.open(urlWhatsapp, '_blank').focus();
}

    

  

