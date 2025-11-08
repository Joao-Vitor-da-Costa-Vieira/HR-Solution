import type { Alternativa } from "./Alternativa";
import type { Avaliacao } from "./Avaliacao";

export interface Pergunta {
  id?: number;
  enunciado: string;

  pesoTotal: number;

  alternativas: Alternativa[];

  avaliacao?: Avaliacao;
}