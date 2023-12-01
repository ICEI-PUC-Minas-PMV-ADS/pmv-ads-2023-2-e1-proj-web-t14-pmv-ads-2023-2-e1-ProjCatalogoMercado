// Mostrar dados escritos no cadastro
let infoCadastro = JSON.parse(localStorage.getItem('infoMercado'))
document.getElementById("perfilNome").innerHTML = infoCadastro.nomeMercado;
document.getElementById("nomeMercado").innerHTML = infoCadastro.nomeMercado;
document.getElementById("enderecoMercado").innerHTML = infoCadastro.enderecoMercado;
document.getElementById("telefoneMercado").innerHTML = infoCadastro.telefoneMercado;

