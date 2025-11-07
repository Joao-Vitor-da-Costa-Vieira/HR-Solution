import { Input } from "@/components/ui/input";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { CriacaoPerguntaAlternativa } from "@/components/perguntas/CriacaoPerguntaAlternativa/CriacaoPerguntaAlternativa";
import type { Pergunta } from "@/model/entities/Pergunta";
import { TipoPergunta } from "@/model/enuns/TipoPergunta";

export function CriarAvaliacao(){

    const [perguntas, setPerguntas] = useState(
        [
            {
                enunciado: "Qual seu nome jão", tipo: TipoPergunta.DISCURSIVA, pesoTotal: 2,
                alternativaUm: "a", numeroAlternativas: 2, pesoUm: 1,
                alternativaDois: "a", pesoDois: 2
            }
        ]
    );

    const adicionarPergunta = () => {
        setPerguntas([...perguntas, 
            {
                enunciado: "Pergunta", tipo: TipoPergunta.DISCURSIVA, pesoTotal: 2,
                alternativaUm: "Alternativa 1", numeroAlternativas: 2, pesoUm: 1,
                alternativaDois: "Alternativa2", pesoDois: 2
            }
        ]);
    }

    const removerPergunta = (pergunta: Pergunta) => {
        const novasPerguntas = perguntas.filter((p) => p !== pergunta);

        setPerguntas(novasPerguntas);
    }

    return (
        <div>
            <Navegacao/>
            <p>Criar Avaliação</p>

            <Label>
                Nome Processo
                <Input placeholder="sas"/>
            </Label>

            <Label>
                Cargo
                <Input placeholder="sas"/>
            </Label>

            <div>
                {
                    perguntas.map((p, index) => {
                        return (
                            <CriacaoPerguntaAlternativa key={index}
                                enunciado={p.enunciado}
                                alternativaUm={p.alternativaUm}
                                alternativaDois={p.alternativaDois}
                                onRemoverPergunta={() => {
                                    removerPergunta(p);
                                }}
                            />
                        )
                    })
                }

                <Button onClick={adicionarPergunta}>Adicionar mais uma pergunta</Button>
            </div>

            <Button>Salvar Questionário</Button>
        </div>
    );
}