import type { Quadrante } from "../enuns/Quadrante";
import type { RespostaAvaliacao } from "./RespostaAvaliacao";

export interface Analise {
  id?: number;

  quadrante: Quadrante;

  //Máximos
  eixoMaxAtitude?: number;
  eixoMaxCapacidade?: number;
  eixoMaxDesempenho?: number;

  liderancaComandanteTotal?: number;
  liderancaTreinadorTotal?: number;
  liderancaOrientadorTotal?: number;
  liderancaDesafiadorTotal?: number;

  //Pontuações Reais
  eixoAtitude?: number;
  eixoCapacidade?: number;
  eixoDesempenho?: number;

  eixoLiderancaComandante?: number;
  eixoLiderancaTreinador?: number;
  eixoLiderancaOrientador?: number;
  eixoLiderancaDesafiador?: number;

  resumoIA?: string;
  respostaAvaliacao?: RespostaAvaliacao;
}
