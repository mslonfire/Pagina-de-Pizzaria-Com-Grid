const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;

  alert("Obrigado pelo contato, " + nome + "! Sua mensagem foi enviada com sucesso.");
  form.reset();
});