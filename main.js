const email = document.getElementById('inputEmail')
const senha = document.getElementById('inputSenha')

function validarFormulario(event) {
    event.preventDefault()

    if(email.value === '' || senha.value === '') {
        alert('Preencha o Formulario')
        return
    } else {
        console.log({
            email: value,
            senha: value
        }) 
            
        
    }
}