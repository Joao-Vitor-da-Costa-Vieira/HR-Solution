import { useState, useEffect, type KeyboardEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface PerguntaLikertProps {
  enunciado: string;
  estiloLideranca?: string;
  desativado?: boolean;
  onResponder?: (valor: number) => void;
  name: string;
}

const ESCALA_LIKERT = [
  { valor: 1, texto: "Discordo totalmente" },
  { valor: 2, texto: "Discordo" },
  { valor: 3, texto: "Neutro" },
  { valor: 4, texto: "Concordo" },
  { valor: 5, texto: "Concordo totalmente" },
];

export default function PerguntaLikert({
  enunciado,
  estiloLideranca,
  desativado = false,
  onResponder = () => {},
  name,
}: PerguntaLikertProps) {
  const [selecionado, setSelecionado] = useState<number | null>(null);

  useEffect(() => {
    setSelecionado(null);
  }, [enunciado]);

  const selecionar = (valor: number) => {
    if (desativado) return;
    setSelecionado(valor);
    onResponder(valor);
  };

  const teclaHandler = (e: KeyboardEvent<HTMLDivElement>, valor: number) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      selecionar(valor);
    }
  };

  return (
    <Card className="w-full p-4 shadow-md border rounded-2xl">
      <CardContent>
        <div className="mb-2">
          <h3 className="text-lg font-semibold leading-snug">{enunciado}</h3>
          {estiloLideranca && (
            <p className="text-sm text-muted-foreground italic">
              
            </p>
          )}
        </div>

        <div className="grid grid-cols-5 gap-2 mt-4 text-center">
          {ESCALA_LIKERT.map((opcao) => {
            const ativo = selecionado === opcao.valor;
            return (
              <div
                key={opcao.valor}
                role="radio"
                aria-checked={ativo}
                tabIndex={desativado ? -1 : 0}
                onKeyDown={(e) => teclaHandler(e, opcao.valor)}
                onClick={() => selecionar(opcao.valor)}
                className={cn(
                  "flex flex-col items-center justify-center border rounded-xl p-2 cursor-pointer transition-all select-none",
                  ativo
                    ? "bg-primary text-primary-foreground shadow-sm scale-[1.02]"
                    : "hover:bg-muted",
                  desativado && "opacity-50 cursor-not-allowed"
                )}
              >
                <Label
                  htmlFor={`${name}-${opcao.valor}`}
                  className="text-xs sm:text-sm cursor-pointer"
                >
                  {opcao.texto}
                </Label>

                <div
                  className={cn(
                    "mt-2 w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    ativo ? "border-primary bg-primary" : "border-muted"
                  )}
                >
                  {ativo && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
