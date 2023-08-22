import { NavLink, Outlet } from "react-router-dom";

const Menu = () => (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Rotas com React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">Sobre</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                <NavLink className="nav-link" exact="true" to="rotas">Rotas</NavLink>
                                </li>
                                <li><a className="dropdown-item" href="/rotas/2023">Rotas com parametros</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
        <Outlet />
    </>
)

export default Menu;