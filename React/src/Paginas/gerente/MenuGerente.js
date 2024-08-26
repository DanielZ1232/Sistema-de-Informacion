import React from 'react';
import './MenuGerente.css'; // Asegúrate de que la ruta sea correcta
import Header from '../../components/navBarGerente';



const MenuGerente = () => {
        return (
        <div>
            <Header />
            <div className="menu-gerente-container">
                <div className="bienvenido-text">Bienvenido Gerente</div>
            </div>
            
        </div>
        );
};

export default MenuGerente;
