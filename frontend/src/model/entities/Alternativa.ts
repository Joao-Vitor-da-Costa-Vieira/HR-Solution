import type { TipoLideranca } from "../enuns/TipoLideranca";
import type { Avaliacao } from "./Avaliacao";

export type Alternativa = {
  id?: number;
  texto: string;
  pesoAtitude?: number;
  pesoCapacidade?: number;
  pesoDesempenho?: number;
  tipoLideranca?: TipoLideranca;
  
  avaliacao: Avaliacao;
}
