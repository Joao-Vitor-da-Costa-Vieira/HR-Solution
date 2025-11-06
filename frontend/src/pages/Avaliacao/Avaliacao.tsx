import './Avaliacao.css'
import PerguntaAlternativa from '../../components/perguntas/PerguntaAlternativa/PerguntaAlternativa';

export function Avaliacao() {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget as HTMLFormElement);
        alert(`
            Valor selecionado: ${data.get("pergunta-1")}
            Valor selecionado: ${data.get("pergunta-2")}
        `);
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

                <PerguntaAlternativa
                    name="pergunta-2"
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