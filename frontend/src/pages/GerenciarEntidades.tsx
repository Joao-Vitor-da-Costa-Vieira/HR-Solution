import { Link } from "react-router-dom";
import { TabelaEntities } from "../components/TabelaEntities";

export const GerenciarEntidades = () => {
    return (
        <div>
            <h3>Tabela de gerenciamento</h3>
        
            <TabelaEntities/>
        
            <Link to={"/"}>
                <button style={{backgroundColor: 'white', color: 'black'}}>
                    Voltar
                </button>
            </Link>
        </div>
    );
}