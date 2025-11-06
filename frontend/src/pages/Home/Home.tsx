import "./Home.css"
import { Navegacao } from "../../components/Navegacao/Navegacao";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <Navegacao/>

            <h1 id="titulo">Teste de Liderança Situacional</h1>

            <p>Teste de Liderança Situacional e tals, e mais alguns dizeres.</p>

            <Link to={"/criarAvaliacao"}>
                Criar Avaliação
            </Link>

            <div style={{backgroundColor: 'white'}}>
                <p style={{color: 'black'}}>Processo 1</p>
                <Link to={"/processoSeletivo"}>Visualizar</Link>
            </div>

            <div style={{backgroundColor: 'white'}}>
                <p style={{color: 'black'}}>Processo 2</p>
                
                <p style={{color: 'black'}}>Visualizar</p>
            </div>
        </div>
    );
}