import "./Home.css"
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import { Link } from "react-router-dom";
import { SelecaoProcessos } from "@/components/processosSeletivos/SelecaoProcessos/SelecaoProcessos";
import { Button } from "@/components/ui/button";

export const Home = () => {
    return (
        <div>
            <Navegacao/>

            <h1 id="titulo">Teste de Liderança Situacional</h1>

            <p>Teste de Liderança Situacional e tals, e mais alguns dizeres.</p>

            <main>
                <section id="selecao-processos">
                    <SelecaoProcessos/>
                </section>

                <section id="adicionar-novo-processo">
                    <Link to={"/criarAvaliacao"}>
                        <Button variant="outline">Criar novo processo</Button>
                    </Link>
                </section>
            </main>

            
        </div>
    );
}