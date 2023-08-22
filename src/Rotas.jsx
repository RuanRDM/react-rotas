import { useParams } from "react-router-dom";


const Rotas = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Rotas - Entendendo as rotas com React</h1>
            {id && <h1>ID Recebido: {id}</h1>}
        </div>
    )
}

export default Rotas;