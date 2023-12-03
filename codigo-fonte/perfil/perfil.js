// Mostrar dados escritos no cadastro
let infoCadastro = JSON.parse(localStorage.getItem('infoMercado'))
document.getElementById("perfilNome").innerHTML = infoCadastro.nomeMercado;
document.getElementById("nomeMercado").innerHTML = infoCadastro.nomeMercado;
document.getElementById("enderecoMercado").innerHTML = infoCadastro.enderecoMercado;
document.getElementById("telefoneMercado").innerHTML = infoCadastro.telefoneMercado;

// Mostrar dados editados
let infoEditada = JSON.parse(localStorage.getItem('infoEditada'))
document.getElementById("perfilNome").innerHTML = infoEditada.nome;
document.getElementById("imgMercado").innerHTML = infoEditada.imagem;
document.getElementById("nomeMercado").innerHTML = infoEditada.nome;
document.getElementById("enderecoMercado").innerHTML = infoEditada.endereco;
document.getElementById("telefoneMercado").innerHTML = infoEditada.telefone;
document.getElementById("horario").innerHTML = infoEditada.horario;

//Mostrar produtos
var db = {
    dados: [
        {
            imagem: 'https://choc-chocolatesfinos.com.br/cdn/shop/products/combodegustacaovegano.png?v=1654023121&width=1280',
            nome: 'Choc',
            descricao: 'Chocolate Vegano',
            preco: '90,00',
            class: 'Doce'
        }
    ]
}

let listaTeste = JSON.parse(localStorage.getItem("listaProdutos"));
if(listaTeste == null){
    localStorage.setItem('listaProdutos', JSON.stringify(db));
}

let lista = JSON.parse(localStorage.getItem("listaProdutos"));

var produtos = '';
for (i=0; i < lista.dados.length; i++) {
    produtos += `<p class="produto-item"> <img src="${ lista.dados[i].imagem }"> <br> ${ lista.dados[i].nome } <br> ${ lista.dados[i].descricao } <br> ${ lista.dados[i].preco } <br> ${ lista.dados[i].class } </p>`;
}

document.getElementById('lista-produtos').innerHTML = produtos;
