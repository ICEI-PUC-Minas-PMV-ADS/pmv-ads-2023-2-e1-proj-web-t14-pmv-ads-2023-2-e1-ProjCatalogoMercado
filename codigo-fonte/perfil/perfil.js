// Mostrar dados escritos no cadastro
let infoCadastro = JSON.parse(localStorage.getItem('infoMercado'))
document.getElementById("perfilNome").innerHTML = infoCadastro.nomeMercado;
document.getElementById("nomeMercado").innerHTML = infoCadastro.nomeMercado;
document.getElementById("enderecoMercado").innerHTML = infoCadastro.enderecoMercado;
document.getElementById("telefoneMercado").innerHTML = infoCadastro.telefoneMercado;

// Mostrar produto com os dados do localStorage
function mostrarProduto () {
// Carregar os produtos
let dados = readProduto ();

//gerar conteúdo do produtos
let conteudoProduto ="";
dados.forEach((item) => {
    conteudoProduto += `
    <tr id= 'linha-${item.id}'>
        <td class="nomeProduto">
        ${item.nome}
        </td>
        <td class="descricaoProduto">
        ${item.descricao}
        </td>
        <td class="precoProduto">
        ${item.preco}
        </td>
        <td class="classProduto">
        ${item.class}
        </td>
        <td class="imgProduto">
        ${item.img}
        </td>
    `;
});
corpoProduto.innerHTML = conteudoProduto;
}