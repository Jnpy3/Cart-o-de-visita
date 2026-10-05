const cartao = document.getElementById("cartao");
const botao = document.getElementById("virar");

botao.addEventListener("click", () => {
  cartao.classList.toggle("virado");

  const virado = cartao.classList.contains("virado");
  botao.textContent = virado ? "ver frente" : "ver contatos";
});

// ---------- ABAS ----------
const abas = document.querySelectorAll(".aba");
const areas = document.querySelectorAll("#area-cartao, #sobre");

abas.forEach((aba) => {
  aba.addEventListener("click", () => {
    // 1. esconde as duas áreas
    areas.forEach((area) => {
      area.hidden = true;
    });

    // 2. mostra só a área do botão clicado
    document.getElementById(aba.dataset.alvo).hidden = false;

    // 3. tira "ativa" de todas as abas e põe só na clicada
    abas.forEach((a) => a.classList.remove("ativa"));
    aba.classList.add("ativa");
  });
});
/* Paleta aquática */
:root {
  --fundo: #04161f;
  --fundo-2: #082a38;
  --cartao-1: #0b3a4a;
  --cartao-2: #0e5a6b;
  --turquesa: #2dd4bf;
  --aqua: #67e8f9;
  --espuma: #e6fbff;
  --texto-suave: #a5d8e0;
  --borda: rgba(103, 232, 249, 0.28);
}

/* Página */
body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 50% 30%, var(--fundo-2), var(--fundo));
  font-family: "Segoe UI", Arial, sans-serif;
}

main { text-align: center; padding: 20px; }

/* Giro do cartão */
.cena { perspective: 1000px; }

.cartao {
  position: relative;
  width: min(360px, 88vw);
  height: 240px;
  transform-style: preserve-3d;
  transition: transform 0.7s;
}

.face {
  position: absolute;
  inset: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  box-sizing: border-box;
  padding: 24px 26px;
  border-radius: 22px;
  background: linear-gradient(145deg, var(--cartao-1), var(--cartao-2));
  border: 1px solid var(--borda);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.08);
  color: var(--espuma);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

.verso { transform: rotateY(180deg); }
.cartao.virado { transform: rotateY(180deg); }

/* Frente */
.nome {
  margin: 0;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
}

.cargo {
  margin: 4px 0 0;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--aqua);
}

.resumo {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--texto-suave);
}

.tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tags li {
  padding: 4px 11px;
  border-radius: 999px;
  background: rgba(4, 22, 31, 0.55);
  border: 1px solid var(--borda);
  font-size: 0.72rem;
  color: var(--espuma);
}

.status {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--turquesa);
}

.ponto {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--turquesa);
  box-shadow: 0 0 8px var(--turquesa);
}

/* Verso */
.verso { justify-content: center; }

.contatos { list-style: none; padding: 0; margin: 0; }
.contatos li { margin: 10px 0; }

.contatos a {
  display: block;
  padding: 9px 14px;
  border-radius: 12px;
  background: rgba(4, 22, 31, 0.45);
  border: 1px solid var(--borda);
  color: var(--espuma);
  text-decoration: none;
  font-size: 0.9rem;
}
.contatos a:hover { background: rgba(45, 212, 191, 0.2); }

/* Botão */
button {
  margin-top: 26px;
  padding: 11px 26px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--turquesa), var(--aqua));
  color: var(--fundo);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
}
button:hover { filter: brightness(1.1); }

.sobre {
  max-width: 420px;
  margin: 0 auto;
  font-family: "Poppins", Arial, sans-serif;
  color: #e6f4f8;
  line-height: 1.7;
}

.sobre h2 {
  color: #ffffff;
  font-weight: 600;
}
