import { Link } from "react-router-dom";
import "./Home.css"
import { PerguntaDissertativa } from "../../components/PerguntaDissertativa/PerguntaDissertativa";
import PerguntaLikert from "../../components/PerguntaLikert/PerguntaLikert";
import { useState, type FormEvent } from "react";

export const Home = () => {
    const [respostaDissertativa, setRespostaDissertativa] = useState("");
    const [respostaLikert, setRespostaLikert] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Resposta enviada: \n1 = " + respostaDissertativa+"\n2 = "+respostaLikert);
    };
    
    return (
        <div>
            <h1 id="titulo">Bem vindo a página principal</h1>

            <Link to={"/gerenciarEntidades/"}>
                <button style={{backgroundColor: 'white', color: 'black'}}>
                    Ir para "Gerenciar Entidades"
                </button>
            </Link>

            <form onSubmit={handleSubmit}>
                <PerguntaDissertativa
                    name="pergunta-1"
                    pergunta="Numa situação XYZ, o que você faria se ABC?"
                    onChange={setRespostaDissertativa}
                />

                <PerguntaLikert
                    name="pergunta-2"
                    question='Gosto de ser o centro das atenções.'
                    onChange={setRespostaLikert}
                />

                 <button
                    type="submit"
                    style={{ padding: "10px 16px", borderRadius: 6 }}
                 >
                    Enviar
                </button>
            </form>
        </div>
    );
}