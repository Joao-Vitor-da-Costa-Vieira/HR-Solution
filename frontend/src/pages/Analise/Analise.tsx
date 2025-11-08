import { useState } from "react";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./Analise.css";
import { GraficoBarras } from "@/components/analise/GraficoBarras/GraficoBarras";
import { consultarAnalisePorID } from "@/service/mock/analiseApi";
import GraficoCartesiano from "@/components/analise/GraficoCartesiano/GraficoCartesiano";
import QuadroLiderancaSituacional from "@/components/analise/QuadroLiderancaSituacional/QuadroLiderancaSituacional";
import { Sparkle } from "lucide-react";

export function Analise() {
  const [loading, setLoading] = useState(false);
  const [respostaIA, setRespostaIA] = useState<string | null>(
    `O participante demonstra um perfil predominantemente do Q3, com alta capacidade. Porém ele tende a variar de atitude quando confrontado com diferentes situações e perfis de liderança diferentes, especificamente em situações relacionados a processos internos da empresa. Recomenda-se investir no desenvolvimento de habilidades de tomada de decisão
em contextos referentes aos processos de fluxo de trabalho praticados por ele.`
  );

  const analise = consultarAnalisePorID(1);

  const dadosCaracteristicas = [
    { name: "Atitude", score: analise.eixoAtitude },
    { name: "Preparo", score: analise.eixoCapacidade },
    { name: "Desempenho", score: analise.eixoDesempenho },
  ];

  const dadosLideranca = [
    { name: "Comandante", score: analise.eixoLiderancaComandante },
    { name: "Treinador", score: analise.eixoLiderancaTreinador },
    { name: "Orientador", score: analise.eixoLiderancaOrientador },
    { name: "Desafiador", score: analise.eixoLiderancaDesafiador },
  ];

  return (
    <div className="analise-container">
      <Navegacao />

      <main>
        <h2>Análise do Participante</h2>

        <section className="info-card">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Participante</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Nome:</strong> Jorge da Silva</p>
              <p><strong>E-mail:</strong> jorge.silva@email.com</p>
              <p><strong>Data da Avaliação:</strong> 06/11/2025</p>
            </CardContent>
          </Card>
        </section>

        <section className="grafico-card">
          <GraficoBarras
            dados={dadosCaracteristicas}
            nome={"Características"}
            color={"#467FF7"}
          />
        </section>

        <section className="info-card">
          <Card>
            <CardHeader>
              <CardTitle>Alinhamento com Lideranças</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-6 text-center">
              <QuadroLiderancaSituacional/>
            </CardContent>
          </Card>
        </section>

        <section className="info-card">
          <Card>
            <CardHeader>
              <CardTitle>Posição em Relação à Liderança</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-6 text-center">
              <GraficoCartesiano
                pontos={[{x: analise.eixoCapacidade, y: analise.eixoAtitude}]}
                espessuraPonto={30}
                corPonto="#dd5d5dff"
              />
            </CardContent>
          </Card>
        </section>

        <section className="ia-card">
          <Card>
            <CardHeader>
              <CardTitle>Resultado Final - {analise.quadrante}</CardTitle>
            </CardHeader>
            <CardContent>

              <Card>
                <CardHeader>
                  <CardTitle>Resumo da Inteligência Artificial</CardTitle>
                </CardHeader>

                <CardContent>
                  
                  {respostaIA && (
                    <div className="resposta-ia">
                      <p>{respostaIA}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
