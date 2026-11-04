"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const btnNaoRef = useRef(null);

  function moveNaoButton() {
    const btn = btnNaoRef.current;
    if (!btn) return;
    const w = btn.offsetWidth;
    const h = btn.offsetHeight;
    const padding = 16;
    const maxX = window.innerWidth - w - padding;
    const maxY = window.innerHeight - h - padding;
    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);
    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    btn.style.zIndex = "8888";
  }

  return (
    <>
      {/* ════════════════════ CONTRATO ════════════════════ */}
      <div className="contract-wrapper">
        <div className="header">
          <span className="seal">⚖️🎮⚖️</span>
          <h1>
            Contrato Oficial de Não Perturbação
            <br />e Proteção ao Direito de Jogar
          </h1>
          <p className="subtitle">
            (Documento de Extrema Importância — Leia com respeito)
          </p>
          <p className="doc-number">
            Instrumento Particular Nº 001/2025 — Vice-City Cartório Digital
          </p>
        </div>

        {/* PARTES */}
        <div className="partes">
          <p>
            <strong>CONTRATANTE:</strong> Maria Paula Vilarina Santos, pessoa
            física, portadora de boas intenções e plena consciência das
            consequências de descumprir este contrato.
          </p>
          <p>
            <strong>CONTRATADO:</strong> Bruno, o Escolhido pelos Deuses do
            Joystick, herói digital em tempo integral e lendário destruidor de
            missões impossíveis.
          </p>
        </div>

        {/* § 1 */}
        <div className="clausula">
          <h2>§ 1º — Do Objeto do Contrato</h2>
          <p>
            O presente instrumento tem como objeto garantir ao{" "}
            <strong>CONTRATADO</strong> pleno, irrestrito e sagrado direito de
            jogar <em>GTA VI</em> pelo período de{" "}
            <strong>7 (sete) dias corridos</strong>, sem qualquer forma de
            interrupção, perturbação, questionamento ou julgamento moral — seja
            ele expresso, tácito, presencial ou via mensagem de WhatsApp com
            pontinhos reticências.
          </p>
        </div>

        {/* § 2 */}
        <div className="clausula">
          <h2>§ 2º — Das Obrigações da Parte Contratante</h2>
          <ul>
            <li>
              🚫 Não fazer perguntas do tipo <em>&#34;você vai sair hoje?&#34;</em>{" "}
              ou <em>&#34;está na hora de dormir?&#34;</em>
            </li>
            <li>
              🚫 Não comentar sobre quantas horas foram jogadas nem fazer cara de
              julgamento
            </li>
            <li>
              🍕 Manter estoque mínimo de salgadinhos, energético e pizza
              disponível
            </li>
            <li>
              🔕 Silenciar qualquer notificação ou campainha que possa distrair o
              CONTRATADO
            </li>
            <li>
              💬 Aceitar respostas monossilábicas como forma válida de comunicação
            </li>
            <li>
              😶 Não comentar sobre o estado do cabelo ou da roupa do CONTRATADO
              durante o período
            </li>
          </ul>
        </div>

        {/* § 3 */}
        <div className="clausula">
          <h2>§ 3º — Das Atividades Permitidas ao Contratado</h2>
          <ul>
            <li>✅ Roubar carros virtuais sem qualquer culpa existencial</li>
            <li>
              ✅ Causar caos em ambiente digital controlado e juridicamente
              protegido
            </li>
            <li>✅ Ignorar ligações com a consciência absolutamente limpa</li>
            <li>
              ✅ Soltar palavrões de emoção em volumes considerados razoáveis
            </li>
            <li>✅ Comer pizza fria diretamente da caixa, sem talheres</li>
            <li>
              ✅ Repetir a mesma missão 47 vezes sem ser questionado sobre isso
            </li>
          </ul>
        </div>

        {/* § 4 */}
        <div className="clausula">
          <h2>§ 4º — Das Penalidades por Descumprimento</h2>
          <p>
            O descumprimento deste contrato sujeitará a{" "}
            <strong>CONTRATANTE</strong> a:
          </p>
          <ul>
            <li>
              🎬 Ouvir o relato completo de todas as missões mais difíceis, com
              comentário tático detalhado
            </li>
            <li>
              👤 Ser eternamente referenciada como personagem NPC no próximo
              playthrough
            </li>
            <li>
              😤 Vergonha perpétua perante toda a comunidade gamer conhecida e
              futura
            </li>
            <li>
              🎮 Ser obrigada a assistir à speedrun mais longa já registrada, sem
              intervalo
            </li>
          </ul>
        </div>

        {/* § 5 */}
        <div className="clausula">
          <h2>§ 5º — Da Vigência</h2>
          <p>
            Este contrato entra em vigor no exato momento do primeiro boot do
            jogo e expira automaticamente ao término de{" "}
            <strong>7 (sete) dias corridos</strong> — ou quando o CONTRATADO,
            por livre e espontânea vontade, decidir que já explorou o suficiente
            o mapa de Vice City (o que vier depois, sem pressão).
          </p>
        </div>

        {/* § 6 */}
        <div className="clausula">
          <h2>§ 6º — Do Foro Competente</h2>
          <p>
            Fica eleito o foro da Sala de Estar, Sofá — Lado Esquerdo, como
            competente para dirimir quaisquer conflitos oriundos do presente
            instrumento, com exclusão de qualquer outro, por mais privilegiado
            que seja.
          </p>
        </div>

        {/* ASSINATURA */}
        <div className="assinatura">
          <p>
            Local: <span className="linha"></span> &nbsp; Data: _____ / _____ /
            _________
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            Assinatura da Contratante:{" "}
            <span className="linha" style={{ width: "260px" }}></span>
          </p>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.85rem",
              fontStyle: "italic",
              color: "#8a6a3a",
            }}
          >
            Maria Paula Vilarina Santos — Parte Contratante
          </p>
        </div>

        {/* BOTÕES */}
        <div className="buttons-area">
          <button
            className="btn btn-sim"
            onClick={() => setModalVisible(true)}
          >
            ✅ Sim, eu aceito
          </button>
          <button
            ref={btnNaoRef}
            className="btn btn-nao"
            onMouseEnter={moveNaoButton}
          >
            ❌ Não
          </button>
        </div>
      </div>

      {/* ════════════════════ MODAL ════════════════════ */}
      <div
        className={`modal-overlay${modalVisible ? " visible" : ""}`}
        onClick={(e) => e.target === e.currentTarget && setModalVisible(false)}
      >
        <div className="modal-card">
          <span className="modal-emoji">😄🎮🥳</span>
          <h2>I love ❤️</h2>
          <p>
            Contrato assinado com sucesso!
            <br />
            Boa sorte, Bruno — o Vice City é seu! 🏝️
          </p>
          <button className="btn-fechar" onClick={() => setModalVisible(false)}>
            Fechar
          </button>
        </div>
      </div>
    </>
  );
}
