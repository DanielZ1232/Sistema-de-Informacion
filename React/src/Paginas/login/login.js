import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './login.css';

const Login = () => {
    const [Correo, setCorreo] = useState('');
    const [Contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const manejarInicioSesion = async (e) => {
        e.preventDefault();

        try {
            const respuesta = await axios.get('http://localhost:3002/Usuarios/');
            const usuarios = respuesta.data;

            // Verificar si el usuario existe y si la contraseña es correcta
            const usuario = usuarios.find(
                user => user.Correo === Correo && user.Contraseña === Contraseña
            );

            if (usuario) {
                alert('Inicio de sesión exitoso');

                // Guardar el ID del usuario en localStorage
                localStorage.setItem('usuarioId', usuario.id);

                // Redirigir basado en el rol del usuario
                switch (usuario.Rol) {
                    case 'Cliente':
                        navigate('/menu'); // Cambia esto a la ruta correcta para el Cliente
                        break;
                    case 'Empleado':
                        navigate('/empleado'); // Cambia esto a la ruta correcta para el Empleado
                        break;
                    case 'Gerente':
                        navigate('/menuGerente'); // Cambia esto a la ruta correcta para el Gerente
                        break;
                    default:
                        alert('Rol desconocido');
                        break;
                }
            } else {
                alert('Correo o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión');
        }
    };

    return (
        <div className="container">
            <div className="left-section">
                <h1>Inicia Sesión</h1>
            </div>
            <div className="right-section">
                <form id="loginForm" onSubmit={manejarInicioSesion}>
                    <div className="form-group">
                        <label htmlFor="email">Correo</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu correo"
                            value={Correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu contraseña"
                            value={Contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-links">
                        <Link to="#">¿Olvidaste tu Contraseña?</Link>
                        <Link to="/registrar">¿No tienes cuenta? Regístrate!</Link>
                    </div>
                    <button type="submit" className="button">Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
