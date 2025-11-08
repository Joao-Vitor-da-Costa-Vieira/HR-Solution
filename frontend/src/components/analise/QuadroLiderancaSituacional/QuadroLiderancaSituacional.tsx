import "./QuadroLiderancaSituacional.css";

type Quadrant = {
  id: string;
  title: string;
  description: string;
  color: string;
};

const QUADRANTS: Quadrant[] = [
  {
    id: "q1",
    title: "S1 — Comandante",
    description:
      "Diante de uma liderança muito diretiva, o colaborador tende a se sentir subestimado. Embora execute as tarefas corretamente, pode demonstrar resistência ou desmotivação por não ter espaço para opinar.",
    color: "#ffe082",
  },
  {
    id: "q2",
    title: "S2 — Treinador",
    description:
      "Com uma liderança mais próxima e encorajadora, o colaborador reage bem inicialmente, pois recebe orientação e suporte. No entanto, pode sentir-se controlado se o acompanhamento for excessivo.",
    color: "#ffccbc",
  },
  {
    id: "q3",
    title: "S3 — Orientador",
    description:
      "Nesse estilo, o colaborador sente-se valorizado e confiante. A abertura para diálogo e a troca constante de feedback fortalecem sua motivação e aumentam sua autonomia.",
    color: "#bbdefb",
  },
  {
    id: "q4",
    title: "S4 — Desafiador",
    description:
      "Quando o líder delega total responsabilidade, o colaborador tende a hesitar. Apesar de ter competência técnica, pode sentir insegurança pela falta de acompanhamento ou reconhecimento.",
    color: "#c8e6c9",
  },
];

export default function QuadroLiderancaSituacional() {
  return (
    <div className="sl-wrapper">
      <h3 className="sl-title">Liderança Situacional — Matriz de Desenvolvimento</h3>

      <div className="sl-matrix" role="img" aria-label="Matriz de Liderança Situacional">
        <div className="sl-left-legend"> <div className="axis-vertical-label"></div> </div>
        
        <div className="sl-grid">
          {/* Top row */}
          <div
            className="sl-cell"
            style={{ backgroundColor: QUADRANTS[0].color }}
          >
            <div className="cell-header">
              <strong className="cell-title">{QUADRANTS[0].title}</strong>
            </div>
            <div className="cell-desc">{QUADRANTS[0].description}</div>
          </div>

          <div
            className="sl-cell"
            style={{ backgroundColor: QUADRANTS[3].color }}
          >
            <div className="cell-header">
              <strong className="cell-title">{QUADRANTS[3].title}</strong>
            </div>
            <div className="cell-desc">{QUADRANTS[3].description}</div>
          </div>

          {/* Bottom row */}
          <div
            className="sl-cell"
            style={{ backgroundColor: QUADRANTS[1].color }}
          >
            <div className="cell-header">
              <strong className="cell-title">{QUADRANTS[1].title}</strong>
            </div>
            <div className="cell-desc">{QUADRANTS[1].description}</div>
          </div>

          <div
            className="sl-cell"
            style={{ backgroundColor: QUADRANTS[2].color }}
          >
            <div className="cell-header">
              <strong className="cell-title">{QUADRANTS[2].title}</strong>
            </div>
            <div className="cell-desc">{QUADRANTS[2].description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
