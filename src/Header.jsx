import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="nav-container">
                <NavLink to="/" className="logo">
                    <span>✦</span> Confeitaria Sonhos
                </NavLink>
                <nav>
                    <ul className="menu">
                        <li className="menu-item">
                            <NavLink to="/">Início</NavLink>
                        </li>
                        
                        <li className="menu-item">
                            <NavLink to="/sobre">Sobre</NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/produtos">Produtos</NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/pedidos">Pedidos</NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink to="/contato">Contato</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header