// Validar Cadastro
function validarCadastro () {
    if (nome.value == "" || nome.value.length < 5) {
        alert("Nome inválido!");
        formNome.focus();
        return;
    }
    if (cnpj.value == "" || cnpj.value.length < 14) {
        alert("CNPJ inválido!");
        formCnpj.focus();
        return;
    }
    if (cep.value == "" || cep.value.length < 8) {
        alert("CEP inválido!");
        formCep.focus();
        return;
    }
    if (endereco.value == "" || endereco.value.length < 15) {
        alert("Endereço inválido!");
        formEndereco.focus();
        return;
    }
    if (telefone.value == "" || telefone.value.length < 11) {
        alert("Telefone inválido!");
        formTelefone.focus();
        return;
    }
    if (email.value == "") {
        alert("E-mail inválido!");
        formEmail.focus();
        return;
    }
    if (senha.value == "") {
        alert("Senha inválida!");
        formSenha.focus();
        return;
    }
    if (confirmarSenha.value == "" || confirmarSenha.value != senha.value) {
        alert("As senhas não correspondem!");
        formConfirmarSenha.focus();
        return;
    }

let myObj = {
      nomeMercado: formCadastro.nome.value,
      cnpjMercado: formCadastro.cnpj.value,
      cepMercado: formCadastro.cep.value,
      enderecoMercado: formCadastro.endereco.value,
      telefoneMercado: formCadastro.telefone.value,
      emailMercado: formCadastro.email.value,
      SenhaMercado: formCadastro.senha.value,
      confirmarSenhaMercado: formCadastro.confirmarSenha.value
    };
let myJSON = JSON.stringify(myObj);
localStorage.setItem("infoCadastro", myJSON);

    alert("Mercado cadastrado com sucesso!");
    window.location.href = "../perfil/mercadoUser.html"
}