import GraficoCartesiano from "../../components/analise/GraficoCartesiano/GraficoCartesiano";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import QuadroLiderancaSituacional from "../../components/analise/QuadroLiderancaSituacional/QuadroLiderancaSituacional";
import "./Analise.css";
import { ResumoIA } from "@/components/analise/ResumoIA/ResumoIA";

export function Analise(){
    return (
        <div>
            <Navegacao/>

            <h1>Análise</h1>

            <GraficoCartesiano
                pontos={[
                    { x: 20, y: 90 },
                ]}
            />

            <QuadroLiderancaSituacional/>

            <ResumoIA
                resumoIA="Esse candidato é interessante por causa de X e Y"
            />
        </div>
    );
}