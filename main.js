const form = document.getElementById('form-comparacao');
const containerMensagemSucesso = document.querySelector('.success-message');
const containerMensagemError = document.querySelector('.error-message');
let formEValido = false;

function validaNumero(a , b) {
    return b > a;
}

function resetState(){
    containerMensagemSucesso.innerHTML = '';
    containerMensagemError.innerHTML = '';

    containerMensagemSucesso.style.display = 'none';
    containerMensagemError.style.display = 'none';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    resetState();

    var numeroA = document.getElementById('numero-a').value;
    var numeroB = document.getElementById('numero-b').value;
    const mensagemSucesso = "Sucesso: o valor de B ("+ numeroB + ") é maior que o valor de A ("+ numeroA +")";
    const mensagemError = "Erro: o valor de B ("+ numeroB + ") é menor que o valor de A ("+ numeroA +")";
    
    formEValido = validaNumero(numeroA , numeroB);
        if (formEValido) {
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';
        } else {            
            containerMensagemError.innerHTML = mensagemError;
            containerMensagemError.style.display = 'block';
    }

    form.reset();
})

