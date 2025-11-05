import { useState, useEffect, type KeyboardEvent } from "react";
import "./PerguntaAlternativa.css";

interface Alternativa {
  id: string | number;
  texto: string;
}

interface PerguntaAlternativaProps {
  pergunta: string;
  alternativas: Alternativa[];
  desativado?: boolean;
  onResponder?: (selecionado: string | number | null) => void;
  name: string;
}

export default function PerguntaAlternativa({
  pergunta,
  alternativas,
  desativado = false,
  onResponder = () => {},
  name,
}: PerguntaAlternativaProps) {
  const [selecionado, setSelecionado] = useState<string | number | null>(null);

  useEffect(() => {
    setSelecionado(null);
  }, [pergunta, JSON.stringify(alternativas)]);

  const alternaSelecionado = (id: string | number) => {
    if (desativado) return;
    setSelecionado(id);
    onResponder(id);
  };

  const teclaHandler = (e: KeyboardEvent<HTMLElement>, id: string | number) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      alternaSelecionado(id);
    }
  };

  return (
    <div className="pergunta-container">
      <h3 className="pergunta-titulo">{pergunta}</h3>
      <div className="pergunta-lista" role="radiogroup">
        {alternativas.map((alt) => {
          const ativo = selecionado === alt.id;
          return (
            <label
              key={alt.id}
              tabIndex={desativado ? -1 : 0}
              onKeyDown={(e) => teclaHandler(e, alt.id)}
              className={`pergunta-alternativa ${ativo ? "ativo" : ""} ${
                desativado ? "desativado" : ""
              }`}
              aria-checked={ativo}
              role="radio"
            >
              <input
                type="radio"
                name={name}
                value={alt.id}
                checked={ativo}
                onChange={() => alternaSelecionado(alt.id)}
                disabled={desativado}
                style={{ display: "none" }}
              />
              <div
                className={`seletor ${ativo ? "marcado" : ""}`}
                onClick={() => alternaSelecionado(alt.id)}
              />
              <span>{alt.texto}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
