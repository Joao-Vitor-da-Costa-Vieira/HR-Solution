import type { EixoPergunta } from "../types/EixoPergunta";
import type { LiderancaPergunta } from "../types/LiderancaPergunta";
import type { TipoPergunta } from "../types/TipoPergunta";
import type { Avaliacao } from "./Avaliacao";

export interface Pergunta {
  id?: number;
  enunciado: string;
  tipo?: TipoPergunta;
  eixo?: EixoPergunta;
  lideranca?: LiderancaPergunta;
  ordem?: number;

  pesoTotal?: number;
  numeroAlternativas?: number;

  alternativaUm?: string;
  pesoUm?: number;

  alternativaDois?: string;
  pesoDois?: number;

  alternativaTres?: string;
  pesoTres?: number;

  alternativaQuatro?: string;
  pesoQuatro?: number;

  alternativaCinco?: string;
  pesoCinco?: number;

  alternativaSeis?: string;
  pesoSeis?: number;

  avaliacao?: Avaliacao;
}
