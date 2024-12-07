const form = window.document.getElementById('form')
const nome = window.document.getElementById('name')
const email = window.document.getElementById('email')
const enviar = window.document.getElementById('enviar')

// validar formulario
function validarFomr() {
    // validar nome
    if (nome.value === "" ) {
        window.alert("Preencha o campo NOME!");
        return false;
    }
    // validar e-mail
    else if (email.value === "" || !isEmailValid(email.value)) {
        alert("Preencha seu e-mail");
        return;
    }
    else {
        window.alert("Dados enviados.")
        return true;
    }
}

// caracteres validos para e-mail
function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

// enviar.addEventListener('click', (e) =>{
//     e.preventDefault()

//     const nameValue = nome.value;
//     const emailValue = email.value;

//     if(nameValue === '' || emailValue === ''){
//         alert = "Preencha todos os campos!"
//         // errorMessege.textContent = "Preencha todos os campos"
//         // return;
//     }
// })

// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     // verificar se nome esta vazio
//     if(nome.value === " "){
//         alert("Preencha seu nome");
//         return;
//     }

//     if(email.value === " " || !isEmailValid(email.value)){
//         alert("Preencha seu e-mail");
//         return;
//     }

//     form.submit();
// });

// function isEmailValid(email){
//     const emailRegex = new RegExp(
//         /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
//     );

//     if(emailRegex.test(email)){
//         return true;
//     }
//     return false;
// }