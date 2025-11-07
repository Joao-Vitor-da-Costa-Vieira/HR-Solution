export const TipoPergunta = {
  OBJETIVA: "OBJETIVA",
  DISCURSIVA: "DISCURSIVA",
} as const;
export type TipoPergunta = typeof TipoPergunta[keyof typeof TipoPergunta];