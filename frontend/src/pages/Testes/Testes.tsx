import { useState, type FormEvent } from "react";
import PerguntaDissertativa from "../../components/perguntas/PerguntaDissertativa/PerguntaDissertativa";
import PerguntaLikert from "../../components/perguntas/PerguntaLikert/PerguntaLikert";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import ChatGemini from "../../components/outros/ChatGemini/ChatGemini";
import "./Testes.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Testes(){
    const [respostaDissertativa, setRespostaDissertativa] = useState("");
    const [respostaLikert, setRespostaLikert] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Resposta enviada: \n1 = " + respostaDissertativa+"\n2 = "+respostaLikert);
    };

    return (
        <div>
            <Navegacao/>

            <h3>Componentes de Pergunta</h3>

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

            <h3>Componentes Shadcn</h3>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

            <h3>Chat Gemini</h3>

            <ChatGemini/>
        </div>
    );
}