import { Link } from "react-router-dom";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao"
import "./ProcessoSeletivo.css";

export function ProcessoSeletivo(){
    return(
        <div>
            <Navegacao/>

            <h2>Processo Seletivo XYZ, criado para a vaga tal</h2>

            <p>Data limite: 26/08/20XX</p>

            <hr/>

            <Link to={"/avaliacao"} style={{color: "red"}}>Link avaliação</Link>

            <div style={{backgroundColor: 'white'}}>
                <p style={{color: 'black'}}>Candidato Jorge</p>
                <Link to={"/analise"} style={{color: "red"}}>Visualizar</Link>
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