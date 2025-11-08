import "./Home.css"
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import { Link } from "react-router-dom";
import { SelecaoProcessos } from "@/components/processosSeletivos/SelecaoProcessos/SelecaoProcessos";
import { Button } from "@/components/ui/button";
import  ObjectListForm  from "@/pages/Home/ObjectListForm"; 


export const Home = () => {
    return (
        <div>
            <Navegacao />

            <h1 id="titulo">Teste de Liderança Situacional</h1>

            <div id="menu">
                <div id="container">
                    

                    <div id="menu-ps">
                        <ObjectListForm/>
                    </div>
                    
                </div>
                
            </div>
        </div>

       
        



        
    );
}