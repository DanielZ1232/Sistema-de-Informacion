import React from 'react';
import { Link } from 'react-router-dom';
import '../Paginas/cliente/menu.css'; // Asegúrate de importar el CSS del menú
import logo from '../assets/Imagenes/logo.png'; // Asegúrate de que esta ruta sea correcta


const NavBarCliente = () => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-white p-3 shadow-sm">
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Parceritos Fieles" className="logo-img" />
        </Link>
      </div>
      <nav>
        <ul className="nav">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button">
              Mascotas
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/registro-mascota">Registrar</Link>
              <Link className="dropdown-item" to="/consultar-mascota">Consultar</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button">
              Reservas
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/Gestion_Reserva/crear.html">Registrar</Link>
              <Link className="dropdown-item" to="/Gestion_Reserva/consultar.html">Consultar</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button">
              Quejas
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/Gesttion_Quejas/Crear_queja.html">Registrar</Link>
              <Link className="dropdown-item" to="/Gesttion_Quejas/Consultar_Quejas.html">Consultar</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Gestion_Clientes/Perfil.html">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarCliente;
