// Cadastrar Produto
btnCadastrar.onclick = function () {
    if (nome.value == "" || nome.value.length < 5) {
        alert("Nome inválido!");
        nome.focus();
        return;
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
    if (senha.value == "" || senha.value.length < 5) {
        alert("Senha inválida!");
        senha.focus();
        return;
    }
    if (confirmarSenha.value == "" || confirmarSenha.value.length < 5 || confirmarSenha.value != senha.value) {
        alert("As senhas não correspondem!");
        confirmarSenha.focus();
        return;
    }
    let infoCadastro = {
        nomeMercado: cadastrarMercado.nome.value,
        cnpjMercado: cadastrarMercado.cnpj.value,
        enderecoMercado: cadastrarMercado.endereco.value,
        telefoneMercado: cadastrarMercado.telefone.value,
        emailMercado: cadastrarMercado.email.value,
        senhaMercado: cadastrarMercado.senha.value,
        confirmarSenhaMercado: cadastrarMercado.confirmarSenha.value
        };

        localStorage.setItem('infoMercado', JSON.stringify(infoCadastro))

        infoCadastro = JSON.parse(localStorage.getItem('infoMercado'))
        
    alert("Mercado cadastrado com sucesso!");
    window.location.href = "../perfil/perfil.html"
}