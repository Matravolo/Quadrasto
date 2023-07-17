// Nome
const inputNome = document.getElementById("validationCustom01");
inputNome.addEventListener("keypress", function (novoNome) {
  let chave = novoNome.key;

  if (/[^a-zA-Z\s]/.test(chave)) {
    novoNome.preventDefault();
  }
});




//sobrenome
const inputSobrenome = document.getElementById("validationCustom02");

inputSobrenome.addEventListener("keypress", function (novoSobrenome) {
  let key = novoSobrenome.ley;

  if (/[^a-zA-Z\s]/.test(key)) {
    novoSobrenome.preventDefault();
  }
});

//DDD e Celular

const ddd = document.getElementById("validationCustom03");
ddd.addEventListener("input", formatarDDD);

function formatarDDD() {
    let valor = ddd.value.replace(/\D/g, '');
    let DDDFormatado = '';

    if (valor.length > 0) {
        DDDFormatado += "(" + valor.substring(0, 2);
    }

    if (valor.length >1 ) {
        DDDFormatado += ")"
    }

    ddd.value = DDDFormatado;
}

const Telefone = document.getElementById("validationCustom04");
Telefone.addEventListener("input", formatarTelefone);

function formatarTelefone() {
    let valor = Telefone.value.replace(/\D/g, '');
    let TelefoneFormatado = '';

    if (valor.length > 0) {
        TelefoneFormatado += "" + valor.substring(0, 5);
    }

    if (valor.length > 5) {
        TelefoneFormatado += "-" + valor.substring(5, 9);
    }

    Telefone.value = TelefoneFormatado;
}

// Usurname

const inputUsername = document.getElementById("validationCustomUsername");
inputUsername.addEventListener("keypress",function (inputUsername) {
  let chave = inputUsername.key;

  if (/[^a-z0-9]/.test(chave)) {
    inputUsername.preventDefault();
  }
});


//Confirmação Senha
const formulario = document.getElementById('formulario');
const senhav = document.getElementById('validationCustom09')
const confirmaSenhav = document.getElementById('validationCustom10')
const alertaSenha = document.getElementById('alerta__senha')
const mensagemSenha = document.getElementById('mensagem__senha')

formulario.addEventListener('submit', function (event) {
  if (confirmaSenhav.value !== senhav.value) {
    event.preventDefault();
    confirmaSenhav.classList.add('is-invalid');
    formulario.classList.remove('was-validated');
    alertaSenha.style.display='none';
  }
});

confirmaSenhav.addEventListener('blur', function () {
  if (confirmaSenhav.value !== senhav.value) {
    confirmaSenhav.classList.add('is-invalid');
    mensagemSenha.style.display='block';
    alertaSenha.style.display='none';
  }
  else{
    confirmaSenhav.classList.remove('is-invalid');
    mensagemSenha.style.display='none';
  }
})

// confirmação email
const emailv = document.getElementById('validationCustom07')
const ConfirmaEmailv = document.getElementById('validationCustom08')
const alertaEmail = document.getElementById('alerta__email')
const mensagemEmail = document.getElementById('mensagem__email')

formulario.addEventListener('submit', function (event) {
  if (ConfirmaEmailv.value !== emailv.value) {
    event.preventDefault();
    ConfirmaEmailv.classList.add('is-invalid');
    formulario.classList.remove('was-validated');
    alertaEmail.style.display='none';
  }
});

ConfirmaEmailv.addEventListener('blur', function () {
  if (ConfirmaEmailv.value !== emailv.value) {
    ConfirmaEmailv.classList.add('is-invalid');
    mensagemEmail.style.display='block';
    alertaEmail.style.display='none';
  }
  else{
    ConfirmaEmailv.classList.remove('is-invalid');
    mensagemEmail.style.display='none';
  }
})


// validacao CPF

const inputCPF = document.getElementById("validationCustom18");
inputCPF.addEventListener("input", formatarCPF);

function formatarCPF() {

    let valor = inputCPF.value.replace(/\D/g, '');
    let CPFformatado = '';

    if (valor.length > 0) {
        CPFformatado += '' + valor.substring(0, 3);
    }

    if (valor.length > 3) {
        CPFformatado += '.' + valor.substring(3, 6);
    }

    if (valor.length > 6) {
        CPFformatado += '.' + valor.substring(6, 9);
    }

    if (valor.length > 9) {
        CPFformatado += '-' + valor.substring(9, 11);
    }

    validationCustom18.value = CPFformatado;
}


let strCPF = document.getElementById('validationCustom18')
const alertaCPF = document.getElementById('alerta__cpf')
const mensagemCPF = document.getElementById('mensagem__cpf')
strCPF.addEventListener('blur',function() {
    validarCPF(strCPF)
});
let validade = 1;
function validarCPF(cpf) {  
    cpf = cpf.value.replace(/\.|-/g,'');
    if(cpf == '') return false;
    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"){
            alert('CPF Inválido')
            strCPF.classList.add('is-invalid');
            alertaCPF.style.display='none'
            mensagemCPF.style.display='block'
            validade = 0;
            return;          
        }  
    // Valida 1o digito
    add = 0;    
    for (i=0; i < 9; i ++)      
        add += parseInt(cpf.charAt(i)) * (10 - i);  
        rev = 11 - (add % 11);  
        if (rev == 10 || rev == 11)    
            rev = 0;    
        if (rev != parseInt(cpf.charAt(9))){    
            alert('CPF Inválido')
            strCPF.classList.add('is-invalid');
            alertaCPF.style.display='none'
            mensagemCPF.style.display='block'
            validade = 0;
            return;
        }  
    // Valida 2o digito
    add = 0;    
    for (i = 0; i < 10; i ++)      
        add += parseInt(cpf.charAt(i)) * (11 - i);  
    rev = 11 - (add % 11);  
    if (rev == 10 || rev == 11)
        rev = 0;    
    if (rev != parseInt(cpf.charAt(10))){
        alert('CPF Inválido')
        strCPF.classList.add('is-invalid');
        alertaCPF.style.display='none'
        mensagemCPF.style.display='block'
        validade = 0;
        return;
    }
    else{
        mensagemCPF.style.display = "none";
        strCPF.classList.remove('is-invalid');
        console.log('Verdadeiro')
        return;
    }
};

formulario.addEventListener('submit', function(event) {
    if (validade == 0) {
        event.preventDefault();
        strCPF.classList.add('is-invalid');
        formulario.classList.remove('was-validated');
        validade = 1;
        alertaCPF.style.display='none'
        mensagemCPF.style.display='block'
    }
    else{
        strCPF.classList.remove('is-invalid');
        mensagemCPF.style.display='none';
    }
});




