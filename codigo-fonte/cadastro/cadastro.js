// Validar Formulário
function validarCadastro () {
    if (nome.value == "" || nome.value.length < 5) {
        alert("Nome inválido!");
        nome.focus();
        return;;
    }
    if (cnpj.value == "" || cnpj.value.length < 14) {
        alert("CNPJ inválido!");
        cnpj.focus();
        return;
    }
    if (cep.value == "" || cep.value.length < 8) {
        alert("CEP inválido!");
        cep.focus();
        return;
    }
    if (endereco.value == "" || endereco.value.length < 15) {
        alert("Endereço inválido!");
        endereco.focus();
        return;
    }
    if (telefone.value == "" || telefone.value.length < 11) {
        alert("Telefone inválido!");
        telefone.focus();
        return;
    }
    if (email.value == "") {
        alert("E-mail inválido!");
        email.focus();
        return;
    }
    if (senha.value == "") {
        alert("Senha inválida!");
        senha.focus();
        return;
    }
    if (confirmarSenha.value == "" || confirmarSenha.value != senha.value) {
        alert("As senhas não correspondem!");
        confirmarSenha.focus();
        return;
    }

let infoMercado = JSON.parse(localStorage.getItem('infoMercado') || '[]')

infoMercado.push(
    {
      nomeMercado: nome.value,
      cnpjMercado: cnpj.value,
      cepMercado: cep.value,
      enderecoMercado: endereco.value,
      telefoneMercado: telefone.value,
      emailMercado: email.value,
      senhaMercado: senha.value,
      confirmarSenhaMercado: confirmarSenha.value
    });

    localStorage.setItem("infoMercado", JSON.stringify(infoMercado))

    alert("Mercado cadastrado com sucesso!");
    window.location.href = "../perfil/perfil.html"
}

// Cadastro de conteúdo
let nomeMercado = nome.value;
document.getElementById("nomeMercado").innerHTML = nomeMercado;