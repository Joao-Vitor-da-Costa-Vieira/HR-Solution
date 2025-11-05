import { Link } from "react-router-dom";
import { Navegacao } from "../../components/Navegacao/Navegacao"
import "./ProcessoSeletivo.css";

export function ProcessoSeletivo(){
    return(
        <div>
            <Navegacao/>

            <h2>Processo Seletivo XYZ, criado para a vaga tal</h2>

            <Link to={"/avaliacao"}>Link avaliação</Link>

            <div style={{backgroundColor: 'white'}}>
                <p style={{color: 'black'}}>Candidato Jorge</p>
                <Link to={"/analise"}>Visualizar</Link>
            </div>

            <div style={{backgroundColor: 'white'}}>
                <p style={{color: 'black'}}>Candidato Borges</p>
                <p style={{color: 'black'}}>Visualizar</p>
            </div>

            <div style={{backgroundColor: 'white'}}>
                <p style={{color: 'black'}}>Candidato Ulysses</p>
                <p style={{color: 'black'}}>Visualizar</p>
            </div>

        </div>
    );
}