document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const bairro = document.getElementById("bairro").value;
  const quartos = document.getElementById("quartos").value;
  const areaMin = document.getElementById("areaMin").value;
  const areaMax = document.getElementById("areaMax").value;
  const vaga = document.getElementById("vaga").value;
  const posicao = document.getElementById("posicao").value;

  const mensagem = `
Olá, me chamo ${nome}.
Meu WhatsApp: ${telefone}

Procuro imóvel em ${bairro}
• Quartos: ${quartos}
• Área: ${areaMin}m² a ${areaMax}m²
• Garagem: ${vaga}
• Posição: ${posicao}
`;

  const numero = "5581991732930";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});
