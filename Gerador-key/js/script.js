let sliderElement = document.querySelector("#slider");
let buttomElement = document.querySelector("#buttom");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password")
let containerpassword = document.querySelector("#container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_@%&*!=";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatorPassword(){
    let pass = "";

    for(let i =0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerpassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha)
}
vD3gMyU0M