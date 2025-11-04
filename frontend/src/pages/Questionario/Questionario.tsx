import { useEffect, useState } from 'react';
import PerguntaDissertativa from '../../components/PerguntaDissertativa/PerguntaDissertativa';
import PerguntaLikert from '../../components/PerguntaLikert/PerguntaLikert';
import './Questionario.css'
import { consultarRespostas } from '../../service/respostas';

export function Questionario() {
    const [perguntas, setPerguntas] = useState<any[]>([]);

    useEffect(() => {
        const obterDados = async () => {
            const perguntas = await consultarRespostas();

            setPerguntas(perguntas);
        }

        obterDados();
    }, []);
        

    const handleSubmit = (formData: FormData) => {
        const p = formData.get('pergunta-1');
        alert("Resposta enviada: \n1 = " + p);
    };
    
    return (
        <div>
            <form action={handleSubmit}>

                {
                    perguntas.map((p, index) => {
                        const name = `pergunta-${index}`;

                        return p.tipo === 'likert' ?
                            <PerguntaLikert key={index} name={name} question={p.pergunta} defaultValue='3'/>                     
                                :
                            <PerguntaDissertativa key={index} name={name} pergunta={p.pergunta} />
                    })
                }

                <button type='submit'>Enviar resposta</button>
            </form>
        </div>
    );  
}