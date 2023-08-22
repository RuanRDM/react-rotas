import { NavLink, Outlet } from "react-router-dom";

const Menu = () => (
    <>
        <ul>
            <li>
                <NavLink exact="true" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink exact="true" to="/rotas">Rotas</NavLink>
            </li>
            <li>
                <NavLink exact="true" to="/rotas/2023">Rotas com parametros</NavLink>
            </li>
            <li>
                <NavLink exact="true" to="/sobre">Sobre</NavLink>
            </li>
        </ul>
        <Outlet/>
    </>
)

export default Menu;