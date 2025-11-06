import GraficoCartesiano from "../../components/charts/GraficoCartesiano/GraficoCartesiano";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import QuadroLiderancaSituacional from "../../components/charts/QuadroLiderancaSituacional/QuadroLiderancaSituacional";
import "./Analise.css";

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
        </div>
    );
}