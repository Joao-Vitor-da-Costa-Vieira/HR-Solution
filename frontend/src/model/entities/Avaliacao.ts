import type { Pergunta } from "./Pergunta";

export interface Avaliacao {
  id?: number;
  titulo: string;
  descricao: string;
  criadoPor: string;
  criadoEm: string; // ISO date string (OffsetDateTime)
  dataLimite: Date;

  // Valores totais
  eixoMaxAtitude?: number;
  eixoMaxCapacidade?: number;
  eixoMaxDesempenho?: number;

  liderancaComandanteTotal?: number;
  liderancaTreinadorTotal?: number;
  liderancaOrientadorTotal?: number;
  liderancaDesafiadorTotal?: number;

  perguntas?: Pergunta[];
}
