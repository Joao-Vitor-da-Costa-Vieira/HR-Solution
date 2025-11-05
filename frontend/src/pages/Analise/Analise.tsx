import GraficoCartesiano from "../../components/GraficoCartesiano/GraficoCartesiano";
import { Navegacao } from "../../components/Navegacao/Navegacao";
import QuadroLiderancaSituacional from "../../components/QuadroLiderancaSituacional/QuadroLiderancaSituacional";
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