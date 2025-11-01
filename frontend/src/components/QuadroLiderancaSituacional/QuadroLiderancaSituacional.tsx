import "./QuadroLiderancaSituacional.css";

type Quadrant = {
  id: string;
  title: string;
  subtitle: string; // follower type
  leaderStyle: string;
  description: string;
  color: string;
  emoji?: string;
};

const QUADRANTS: Quadrant[] = [
  {
    id: "q1",
    title: "Baixa competência\nAlto comprometimento",
    subtitle: "D1 — Entusiastic Beginner",
    leaderStyle: "S1 — Direcionar (Directing)",
    description:
      "Aprendiz entusiasmado: precisa de instruções claras e supervisão próxima para aprender a tarefa.",
    color: "#ffe082",
    emoji: "🌱",
  },
  {
    id: "q2",
    title: "Baixa competência\nBaixo comprometimento",
    subtitle: "D2 — Desiludido/Aprendiz",
    leaderStyle: "S2 — Orientar / Treinar (Coaching)",
    description:
      "Alguma experiência inicial, mas motivação baixa. Precisa de suporte, encorajamento e feedback.",
    color: "#ffccbc",
    emoji: "⚠️",
  },
  {
    id: "q3",
    title: "Alta competência\nBaixo comprometimento",
    subtitle: "D3 — Capaz, mas inseguro",
    leaderStyle: "S3 — Apoiar (Supporting)",
    description:
      "Tem competência, mas falta confiança ou motivação consistente — líder oferece apoio e participação nas decisões.",
    color: "#bbdefb",
    emoji: "🤝",
  },
  {
    id: "q4",
    title: "Alta competência\nAlto comprometimento",
    subtitle: "D4 — Autônomo",
    leaderStyle: "S4 — Delegar (Delegating)",
    description:
      "Alto nível de habilidade e motivação — delegue responsabilidades com autonomia e monitore pontualmente.",
    color: "#c8e6c9",
    emoji: "🏆",
  },
];

export default function QuadroLiderancaSituacional() {
  return (
    <div className="sl-wrapper">
      <h3 className="sl-title">Liderança Situacional — Matriz de Desenvolvimento</h3>

      <div className="sl-matrix" role="img" aria-label="Matriz de Liderança Situacional">
        <div className="sl-left-legend">
          <div className="axis-vertical-label">Comprometimento ↑</div>
        </div>

        <div className="sl-grid">
          {/* Top row */}
          <div
            className="sl-cell"
            style={{ backgroundColor: QUADRANTS[0].color }}
            title={QUADRANTS[0].subtitle}
          >
            <div className="cell-header">
              <span className="cell-emoji">{QUADRANTS[0].emoji}</span>
              <strong className="cell-subtitle">{QUADRANTS[0].subtitle}</strong>
            </div>
            <div className="cell-leader">{QUADRANTS[0].leaderStyle}</div>
            <div className="cell-desc">{QUADRANTS[0].description}</div>
          </div>

          <div
            className="sl-cell"
            style={{ backgroundColor: QUADRANTS[3].color }}
            title={QUADRANTS[3].subtitle}
          >
            <div className="cell-header">
              <span className="cell-emoji">{QUADRANTS[3].emoji}</span>
              <strong className="cell-subtitle">{QUADRANTS[3].subtitle}</strong>
            </div>
            <div className="cell-leader">{QUADRANTS[3].leaderStyle}</div>
            <div className="cell-desc">{QUADRANTS[3].description}</div>
          </div>

          {/* Bottom row */}
          <div
            className="sl-cell"
            style={{ backgroundColor: QUADRANTS[1].color }}
            title={QUADRANTS[1].subtitle}
          >
            <div className="cell-header">
              <span className="cell-emoji">{QUADRANTS[1].emoji}</span>
              <strong className="cell-subtitle">{QUADRANTS[1].subtitle}</strong>
            </div>
            <div className="cell-leader">{QUADRANTS[1].leaderStyle}</div>
            <div className="cell-desc">{QUADRANTS[1].description}</div>
          </div>

          <div
            className="sl-cell"
            style={{ backgroundColor: QUADRANTS[2].color }}
            title={QUADRANTS[2].subtitle}
          >
            <div className="cell-header">
              <span className="cell-emoji">{QUADRANTS[2].emoji}</span>
              <strong className="cell-subtitle">{QUADRANTS[2].subtitle}</strong>
            </div>
            <div className="cell-leader">{QUADRANTS[2].leaderStyle}</div>
            <div className="cell-desc">{QUADRANTS[2].description}</div>
          </div>
        </div>

        <div className="sl-bottom-legend">
          <div className="axis-horizontal-label">Competência →</div>
        </div>
      </div>

      <div className="sl-note">
        <strong>Obs.</strong> Eixos: Competência (esq → dir) e Comprometimento (inf → sup).
        Estilos de liderança: S1 Directing, S2 Coaching, S3 Supporting, S4 Delegating.
      </div>
    </div>
  );
}
