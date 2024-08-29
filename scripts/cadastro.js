const dadosInvalidos = document.querySelectorAll('.dadoInvalido');
const inputDatas = document.querySelectorAll('.inputData');

const emailCadastro = document.getElementById("emailCadastro");
const nomeCadastro = document.getElementById("nomeCadastro");
const senhaCadastro = document.getElementById("passwordCadastro")

const regexEmail = /^[^\s]+@[^\s]+\.[^\s]+$/;
const regexName =  /^(?!\s*$).{5,60}$/;
const regexPassword = /^[A-Za-z0-9]{8,14}$/; 

function setError(index){
    dadosInvalidos[index].classList.add('aparecendoErro');
    inputDatas[index].classList.add('redBorder');
}

function hideError(index){
    dadosInvalidos[index].classList.remove('aparecendoErro');
    inputDatas[index].classList.remove('redBorder');
}

function emailValidate(){
    if (!regexEmail.test(emailCadastro.value)){
        setError(0);
    } else{
        hideError(0);
    }
}

function nameValidate(){
    if(!regexName.test(nomeCadastro.value)){
        setError(1);
    } else{
        hideError(1);
    }
}

function passwordValidate(){
    if(!regexPassword.test(senhaCadastro.value)){
        setError(2);
     } else{
        hideError(2);
     }
}