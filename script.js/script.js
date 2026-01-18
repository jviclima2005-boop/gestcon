document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const quartos = document.getElementById("quartos").value;
  const min = document.getElementById("min").value;
  const max = document.getElementById("max").value;
  const vaga = document.getElementById("vaga").value;
  const posicao = document.getElementById("posicao").value;

  const mensagem =
`Olá, meu nome é ${nome}.

Procuro um imóvel com as seguintes características:
• ${quartos} quarto(s)
• Área entre ${min}m² e ${max}m²
• ${vaga}
• Posição solar: ${posicao}

Aguardo retorno da GestCon.`;

  const telefone = "5581991732930";

  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

  window.location.href = url;
});
