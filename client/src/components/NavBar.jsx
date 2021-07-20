import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navBar">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/detalle" activeClassName="active">Detalle de Raza de Perro</NavLink>
                </li>
                <li>
                    <NavLink exact to="/crear" activeClassName="active">Crear Raza de Perro</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;