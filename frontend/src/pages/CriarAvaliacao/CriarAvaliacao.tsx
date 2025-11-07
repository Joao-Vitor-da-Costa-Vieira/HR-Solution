import { Input } from "@/components/ui/input";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PerguntaAlternativa from "@/components/perguntas/PerguntaAlternativa/PerguntaAlternativa";

export function CriarAvaliacao(){

    const alternativas = [
        {id: "1", texto: "Joel"},
        {id: "2", texto: "Antebas"},
        {id: "3", texto: "Jarvis"},
        {id: "4", texto: "Louquinho"}
    ];

    return (
        <div>
            <Navegacao/>
            <p>Criar Avaliação</p>

            <Label>
                Nome Processo
                <Input placeholder="sas"/>
            </Label>

            <Label>
                Cargo
                <Input placeholder="sas"/>
            </Label>

            <div>
                <PerguntaAlternativa
                    alternativas={alternativas}
                    name="sas"
                    pergunta="Qual teu nome rapaiz?"
                />

                <Button>Adicionar mais uma pergunta</Button>
            </div>

            <Button>Salvar Questionário</Button>
        </div>
    );
}