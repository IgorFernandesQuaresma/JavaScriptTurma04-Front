function validaForm() {
    let nome = document.querySelector("#nome").value;
    let nomeMsg = document.querySelector("#nome_msg");
    
    if (nome.length < 3) {
        nomeMsg.innerHTML = "Digite um nome válido";
    } else {
        nomeMsg.innerHTML = "";
    }

    let email = document.querySelector("#email").value;
    let emailMsg = document.querySelector("#email_msg");

    if (email.includes("@")) {
        emailMsg.innerHTML = "";
    } else {
        emailMsg.innerHTML = "Digite um email valido";
    }
}


