let infoMercado = JSON.parse(localStorage.getItem("infoMercado"));
document.getElementById("nome").innerHTML = infoMercado.nome;
document.getElementById("nomeTitulo").innerHTML = infoMercado.nome;
document.getElementById("email").innerHTML = infoMercado.email;
document.getElementById("telefone").innerHTML = infoMercado.telefone;
document.getElementById("instituicao").innerHTML = infoMercado.instituicao;
document.getElementById("categoria").innerHTML = infoMercado.opcoes;
document.getElementById("endereco").innerHTML = infoMercado.endereco;