let infoCadastro = JSON.parse(localStorage.getItem('infoMercado'))
document.getElementById("nomeMenu").innerHTML = infoCadastro.nomeMercado;
document.getElementById("nomeMercado").innerHTML = infoCadastro.nomeMercado;
document.getElementById("enderecoMercado").innerHTML = infoCadastro.enderecoMercado;
document.getElementById("telefoneMercado").innerHTML = infoCadastro.telefoneMercado;
