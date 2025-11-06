import { useState, type FormEvent } from "react";
import PerguntaDissertativa from "../../components/perguntas/PerguntaDissertativa/PerguntaDissertativa";
import PerguntaLikert from "../../components/perguntas/PerguntaLikert/PerguntaLikert";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import ChatGemini from "../../components/outros/ChatGemini/ChatGemini";

export function TestesLoucos(){
    const [respostaDissertativa, setRespostaDissertativa] = useState("");
    const [respostaLikert, setRespostaLikert] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Resposta enviada: \n1 = " + respostaDissertativa+"\n2 = "+respostaLikert);
    };

    return (
        <div>
            <Navegacao/>

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

            <ChatGemini/>
        </div>
    );
}