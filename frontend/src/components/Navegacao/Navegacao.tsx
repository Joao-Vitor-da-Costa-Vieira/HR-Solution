import { Link } from "react-router-dom";
import "./Navegacao.css";

export function Navegacao(){
    return (
        <nav className="navegacao">
            <Link to={"/"}>
                • Home
            </Link>

            <Link to={"/gerenciarQuestionario"}>
                • Gerenciar Questionários
            </Link>

            <Link to={"/crudSimples"}>
                • Crud Simples
            </Link>

            <Link to={"/questionario"}>
                • Questionário
            </Link>

            <Link to={"/analise"}>
                • Análise Questionário
            </Link>

            <Link to={"/testesLoucos"}>
                • Testes Loucos
            </Link>
        </nav>
    );
}