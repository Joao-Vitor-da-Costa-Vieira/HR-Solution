import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>Bem vindo a página principal</h1>

            <Link to={"/gerenciarEntidades/"}>
                <button style={{backgroundColor: 'white', color: 'black'}}>
                    Ir para "Gerenciar Entidades"
                </button>
            </Link>
        </div>
    );
}