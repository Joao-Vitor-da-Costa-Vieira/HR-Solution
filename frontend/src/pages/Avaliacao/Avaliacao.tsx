import "./Avaliacao.css";
import PerguntaAlternativa from "../../components/perguntas/PerguntaAlternativa/PerguntaAlternativa";
import { useEffect, useState } from "react";
import type { Avaliacao } from "@/model/entities/Avaliacao";
import { consultarAvaliacaoMockada } from "@/service/mock/mockAvaliacao";
import type { RespostaAvaliacao } from "@/model/entities/RespostaAvaliacao";
import type { RespostaPergunta } from "@/model/entities/RespostaPergunta";
import type { Pergunta } from "@/model/entities/Pergunta";
import { Button } from "@/components/ui/button";
import PerguntaLikert from "@/components/perguntas/PerguntaLikert/PerguntaLikert";

export function Avaliacao() {
  const [avaliacao, setAvaliacao] = useState<Avaliacao>();
  const [respostas, setRespostas] = useState<RespostaPergunta[]>([]);

  useEffect(() => {
    const obterDados = async () => {
      const avaliacao = await consultarAvaliacaoMockada(-1);
      setAvaliacao(avaliacao);
    };

    obterDados();
  }, []);

  const handleResponder = (pergunta: Pergunta, respostaIndex: number) => {
    setRespostas((prev) => {
      const existente = prev.find((r) => r.pergunta?.id === pergunta.id);

      if (existente) {
        // Atualiza resposta existente
        return prev.map((r) =>
          r.pergunta?.id === pergunta.id
            ? { ...r, respostaEscolhida: respostaIndex }
            : r
        );
      } else {
        // Adiciona nova resposta
        return [
          ...prev,
          {
            respostaEscolhida: respostaIndex,
            pergunta,
          },
        ];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const resposta: RespostaAvaliacao = {
      nomeCandidato: "Jão",
      emailCandidato: "jao@gmail.com",
      respostas: respostas,
    };

    console.log("Respostas enviadas:", resposta);

    //await adicionarRespostaAvaliacao(resposta);
    alert("Respostas enviadas com sucesso!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {avaliacao && avaliacao.perguntas && avaliacao.perguntas.length > 0 ? (
          avaliacao.perguntas.map((p, index) => (
            <div style={{marginTop: 16}}>
              {
                p.alternativas[0].tipoLideranca ?
                  <PerguntaLikert
                    name="lideranca-comandante"
                    enunciado={p.enunciado}
                    estiloLideranca="Comandante"
                    onResponder={(valor) => console.log("Likert:", valor)}
                  />

                  :

                  <PerguntaAlternativa
                    key={p.id ?? index}
                    name={`pergunta-${index}`}
                    pergunta={p}
                    onResponder={(respostaIndex) => handleResponder(p, respostaIndex)}
                  />
              }
            </div>
          ))
        ) : (
          <div>
            <p>Questionário inválido</p>
          </div>
        )}

        <Button style={{marginTop: 16}} type="submit">Enviar</Button>
      </form>
    </div>
  );
}
