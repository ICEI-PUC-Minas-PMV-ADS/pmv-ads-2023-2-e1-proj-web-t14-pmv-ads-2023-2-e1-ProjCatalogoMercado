var modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function saveChanges() {
  // Adicione aqui a lógica para salvar as alterações
  alert("Alterações salvas com sucesso!");
  closeModal();
}

function redirectChangePassword() {
  // Redirecionar para a página de alteração de senha
  window.location.href = "alterar_senha.html";
}
