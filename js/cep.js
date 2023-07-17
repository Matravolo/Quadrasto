document.getElementById('validationCustom11').addEventListener("blur", chamaAPI)

async function chamaAPI() {
    let cep = document.querySelector("#validationCustom11").value

    const apiViaCep = 'https://viacep.com.br/ws/' + cep + '/json/'

    const resCep = await fetch(apiViaCep)
    const data = await resCep.json()

    if (data.erro == true)
        alert
    else
        document.getElementById("validationCustom14").value = `${data.bairro}`
        document.getElementById("validationCustom15").value = `${data.logradouro}`
        document.getElementById("validationCustom13").value = `${data.localidade}`
        document.getElementById("validationCustom12").value = `${data.uf}`
}