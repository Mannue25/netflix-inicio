

// validar el formulario 

const inputs = document.querySelectorAll('form, .campo input');

// listener a los inputs.

inputs.forEach(input => {
    input.addEventListener('blur', validarInput);

});

inputs.forEach(input => {
    input.addEventListener('input', validarInput)
});

function validarInput(e) {
    
    const estados = ['valido', 'no valido'];

    let clase;
    if (e.target.value.length === 0) {
        clase = estados[1];
    } else {
        clase = estados[0];
    }


// inyectar el div con el error.

if( clase === 'no-valido') {
    if(e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
 // construir un mensaje de error
 const errorDiv = document.createElement('div');
 errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
 errorDiv.classList.add('alerta');
 //insertar error
 e.target.parentElement.parentElement.insertBefore(errorDiv,
     e.target.parentElement.nextElementSibling);
    }
   
} else {
// limpiar el mensaje de error si existe.
if(e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
    e.target.parentElement.nextElementSibling.remove();
}

}
}


// Mostrar y ocultar password.

const mostrarConstraseña = document.querySelector('form .campo span');

mostrarConstraseña.addEventListener('click', e => {

    const passwordInput = document.querySelector('#password');

    if(e.target.classList.contains('mostrar')) {
        
        // mostrar texto.
        e.target.classList.remove('mostrar');
        // Cambiar texto

        e.target.textContent = 'Ocultar';

        passwordInput.type = 'text';
    } else {
        e.target.classList.add('mostrar')

        //cambiar el texto

        e.target.createContent = 'Mostrar';

        //Cambiemos a password.

        passwordInput.type = 'password';
    }
})