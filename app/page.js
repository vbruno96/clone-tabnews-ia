"use client";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [totalContents, setTotalContents] = useState(null);
  const [loadingContents, setLoadingContents] = useState(true);

  // Confete ao montar
  useEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    updateSize();
    setShowConfetti(true);
    window.addEventListener("resize", updateSize);
    const timer = setTimeout(() => setShowConfetti(false), 6000);
    return () => {
      window.removeEventListener("resize", updateSize);
      clearTimeout(timer);
    };
  }, []);

  // Busca total de conteúdos via API route (server-side, sem CORS)
  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/tabnews-stats");
        const data = await res.json();
        setTotalContents(
          data.totalContents !== null
            ? data.totalContents.toLocaleString("pt-BR")
            : null,
        );
      } catch {
        setTotalContents(null);
      } finally {
        setLoadingContents(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <>
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={350}
          recycle={false}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
        />
      )}

      {/* ── Header ── */}
      <header className="tn-header">
        <div className="tn-container tn-header-inner">
          <a href="/" className="tn-logo" aria-label="TabNews">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="6" fill="#2da44e" />
              <text
                x="50%"
                y="54%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
                fontFamily="monospace"
              >
                TN
              </text>
            </svg>
            <span>TabNews</span>
          </a>

          <nav className="tn-nav">
            <a
              href="https://www.tabnews.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="tn-nav-link"
            >
              Site oficial
            </a>
          </nav>
        </div>
      </header>

      {/* ── Conteúdo principal ── */}
      <main className="tn-container tn-main">
        <div className="tn-under-construction">
          {/* Aviso de construção */}
          <div className="tn-alert">
            <span className="tn-alert-icon" aria-hidden="true">
              🚧
            </span>
            <div className="tn-alert-body">
              <strong>Em construção</strong>
              <p>
                Estamos neste exato momento reconstruindo o TabNews, um lugar na
                internet para quem trabalha com tecnologia e precisa consumir
                conteúdos com o valor concreto.
              </p>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="tn-stats-box">
            <h2 className="tn-stats-title">📊 Estatísticas do TabNews</h2>

            <div className="tn-stat-row">
              <span className="tn-stat-label">Total de conteúdos publicados</span>
              <span className="tn-stat-value">
                {loadingContents ? (
                  <span className="tn-skeleton" aria-label="Carregando…" />
                ) : totalContents !== null ? (
                  totalContents
                ) : (
                  <span className="tn-stat-unavailable">
                    Indisponível no momento
                  </span>
                )}
              </span>
            </div>
          </div>

          {/* CTA para o site oficial */}
          <div className="tn-cta">
            <a
              href="https://www.tabnews.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="tn-btn-primary"
            >
              Acessar o TabNews oficial →
            </a>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="tn-footer">
        <div className="tn-container">
          <span>
            Feito com ❤️ como parte do{" "}
            <a
              href="https://curso.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              curso.dev
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
