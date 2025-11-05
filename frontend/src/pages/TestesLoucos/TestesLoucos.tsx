import { useState, type FormEvent } from "react";
import ChatGemini from "../../components/ChatGemini/ChatGemini";
import PerguntaDissertativa from "../../components/PerguntaDissertativa/PerguntaDissertativa";
import PerguntaLikert from "../../components/PerguntaLikert/PerguntaLikert";
import { Navegacao } from "../../components/Navegacao/Navegacao";

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