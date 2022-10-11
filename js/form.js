const formularioRegister = document.getElementById("formularioRegister");
const btnSubmit = document.getElementById("buttonSubmitForm");
const btnContinue = document.getElementById("buttonContinueModal");
formularioRegister.addEventListener("submit", mostrarModal);

function enviarForm() {
  HTMLFormElement.prototype.submit.call(formularioRegister);
}
function mostrarModal(evento) {
  evento.preventDefault();
  const myModal = new bootstrap.Modal("#modal");
  myModal.show();
  btnContinue.addEventListener("click", enviarForm);
}
