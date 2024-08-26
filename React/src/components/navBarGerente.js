import React, { useState } from 'react';
import './navbarGerente.css';
import LogoGerente from '../assets/Imagenes/logo.png'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src={LogoGerente} alt="Logo de la empresa" className="logo" />
            </div>
            <nav className="navigation">
                <ul>
                    <li 
                        className="dropdown" 
                        onMouseEnter={() => setIsDropdownOpen(true)} 
                        onMouseLeave={closeDropdown}
                    >
                        <Link to="#" onClick={toggleDropdown}>Consultas</Link>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="#" onClick={closeDropdown}>Usuarios</Link></li>
                                <li><Link to="#" onClick={closeDropdown}>Quejas</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="#">Reservas</Link></li>
                    <li><Link to="#">Perfil</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
