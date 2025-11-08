import { useState, useEffect, type KeyboardEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { Pergunta } from "@/model/entities/Pergunta";

interface PerguntaAlternativaProps {
  pergunta: Pergunta;
  desativado?: boolean;
  onResponder?: (selecionado: number) => void;
  name: string;
}

export default function PerguntaAlternativa({
  pergunta,
  desativado = false,
  onResponder = () => {},
  name,
}: PerguntaAlternativaProps) {
  const [selecionado, setSelecionado] = useState<number | null>(null);

  useEffect(() => {
    // reseta seleção quando muda a pergunta
    setSelecionado(null);
  }, [pergunta]);

  const alternaSelecionado = (index: number) => {
    if (desativado) return;
    setSelecionado(index);
    onResponder(index);
  };

  const teclaHandler = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      alternaSelecionado(index);
    }
  };

  return (
    <Card className="w-full p-4 shadow-md border rounded-2xl">
      <CardContent>
        <h3 className="text-lg font-semibold mb-4">{pergunta.enunciado}</h3>

        <div className="grid gap-2">
          {pergunta?.alternativas?.map((alt, index) => {
            const ativo = selecionado === index;
            return (
              <div
                key={alt.id ?? index}
                role="radio"
                aria-checked={ativo}
                tabIndex={desativado ? -1 : 0}
                onKeyDown={(e) => teclaHandler(e, index)}
                onClick={() => alternaSelecionado(index)}
                className={cn(
                  "flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-colors",
                  ativo
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted",
                  desativado && "opacity-50 cursor-not-allowed"
                )}
              >
                <input
                  type="radio"
                  name={name}
                  value={alt.id ?? index}
                  checked={ativo}
                  disabled={desativado}
                  onChange={() => alternaSelecionado(index)}
                  className="hidden"
                />

                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                    ativo ? "border-primary bg-primary" : "border-muted"
                  )}
                >
                  {ativo && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>

                <Label className="text-base cursor-pointer">
                  {alt.texto}
                </Label>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
