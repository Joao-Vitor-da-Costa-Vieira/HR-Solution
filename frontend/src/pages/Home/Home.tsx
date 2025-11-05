import "./Home.css"
import { Navegacao } from "../../components/Navegacao/Navegacao";

export const Home = () => {
    return (
        <div>
            <Navegacao/>

            <h1 id="titulo">Bem vindo a página principal</h1>

            <p>Teste de Liderança Situacional e tals, e mais alguns dizeres.</p>
        </div>
    );
}