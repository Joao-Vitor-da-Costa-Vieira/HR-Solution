import { useEffect, useState } from 'react';
import './Questionario.css'
import { consultarPerguntas } from '../../service/perguntas';
import PerguntaAlternativa from '../../components/PerguntaAlternativa/PerguntaAlternativa';

export function Questionario() {
    const [perguntas, setPerguntas] = useState<any[]>([]);

    useEffect(() => {
        const obterDados = async () => {
            const perguntas = await consultarPerguntas();

            setPerguntas(perguntas);
        }

        obterDados();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget as HTMLFormElement);
        alert("Valor selecionado:"+data.get("pergunta-1"));
    }; 
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <PerguntaAlternativa
                    name="pergunta-1"
                    pergunta="Qual seu super-herói favorito?"
                    alternativas={[
                    { id: "batman", texto: "Batman" },
                    { id: "homem-aranha", texto: "Homem-Aranha" },
                    { id: "mulher-maravilha", texto: "Mulher-Maravilha" },
                    ]}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );  
}