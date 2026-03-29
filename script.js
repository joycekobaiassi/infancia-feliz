// ===== WHATSAPP =====
function falarWhats() {
  const numero = "5548999999999";
  const mensagem = "Olá! Gostaria de saber mais sobre a escola 😊";

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
}

// ===== CHAT ABRIR/FECHAR =====
function abrirChat() {
  const chat = document.getElementById("chatBox");

  if (chat.style.display === "block") {
    chat.style.display = "none";
  } else {
    chat.style.display = "block";
  }
}

// ===== CHAT FLUXO =====
function resposta(etapa, dado = "") {
  const chat = document.getElementById("chatConteudo");

  if (!chat) return; // segurança

  if (etapa === "inicio") {
    chat.innerHTML = `
      <p>O que você deseja? 😊</p>
      <button onclick="resposta('matricula')">Matrícula</button>
      <button onclick="resposta('valores')">Valores</button>
      <button onclick="resposta('visita')">Agendar visita</button>
    `;
  }

  else if (etapa === "matricula") {
    chat.innerHTML = `
      <p>Qual a idade da criança?</p>
      <button onclick="resposta('mat_idade','1 a 3 anos')">1 a 3 anos</button>
      <button onclick="resposta('mat_idade','4 a 10 anos')">4 a 10 anos</button>
    `;
  }

  else if (etapa === "mat_idade") {
    chat.innerHTML = `
      <p>Qual período deseja?</p>
      <button onclick="resposta('mat_final','${dado} - Matutino')">Matutino</button>
      <button onclick="resposta('mat_final','${dado} - Vespertino')">Vespertino</button>
      <button onclick="resposta('mat_final','${dado} - Integral')">Integral</button>
    `;
  }

  else if (etapa === "mat_final") {
    chat.innerHTML = `
      <p>Perfeito 😊 Temos vagas!</p>
      <button onclick="irWhats('Matrícula: ${dado}')">Falar no WhatsApp</button>
    `;
  }

  else if (etapa === "valores") {
    chat.innerHTML = `
      <p>Os valores variam entre meio período e integral.</p>
      <p>Qual a idade da criança?</p>

      <button onclick="resposta('val_final','1 a 3 anos')">1 a 3 anos</button>
      <button onclick="resposta('val_final','4 a 10 anos')">4 a 10 anos</button>
    `;
  }

  else if (etapa === "val_final") {
    chat.innerHTML = `
      <p>Vou te passar os valores 😊</p>
      <button onclick="irWhats('Valores para idade: ${dado}')">Ver valores</button>
    `;
  }

  else if (etapa === "visita") {
    chat.innerHTML = `
      <p>Qual período prefere?</p>
      <button onclick="resposta('vis_final','Manhã')">Manhã</button>
      <button onclick="resposta('vis_final','Tarde')">Tarde</button>
    `;
  }

  else if (etapa === "vis_final") {
    chat.innerHTML = `
      <p>Perfeito 💛</p>
      <button onclick="irWhats('Visita no período: ${dado}')">Agendar visita</button>
    `;
  }
}

// ===== WHATSAPP FINAL =====
function irWhats(info) {
  const numero = "5548999999999";

  const mensagem = `Olá! 😊

Conheci o Centro Educacional Infância Feliz pelo site e gostei muito!

Tenho interesse em:
${info}

Gostaria de mais informações e, se possível, agendar uma visita.`;

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
}
