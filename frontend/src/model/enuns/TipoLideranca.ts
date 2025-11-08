export const TipoLideranca = {
  COMANDANTE: "COMANDANTE",
  TREINADOR: "TREINADOR",
  ORIENTADOR: "ORIENTADOR",
  DESAFIADOR: "DESAFIADOR",
} as const;
export type TipoLideranca = typeof TipoLideranca[keyof typeof TipoLideranca];