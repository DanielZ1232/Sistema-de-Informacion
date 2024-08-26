import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Paginas/index';
import Login from './Paginas/login/login';
import Registrar from './Paginas/Registrar/registrar';
import MenuCliente from './Paginas/cliente/menú'
import MenuGerente from './Paginas/gerente/MenuGerente';

const App = () => {
    return (
        <Router>
                <Routes>
                    {/* Ruta para la página de inicio ha sido eliminada, ya que ahora está incluida en Header */}
                    <Route path="/" element={<Index/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registrar" element={<Registrar/>} />
                    <Route path="/menu" element={<MenuCliente/>} />
                    <Route path='/menuGerente' element={<MenuGerente/>}/>
                </Routes>
        </Router>
    );
};

export default App;
