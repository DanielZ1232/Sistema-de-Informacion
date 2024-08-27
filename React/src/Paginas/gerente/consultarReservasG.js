import React, { useEffect, useState } from 'react';
import NavBarGerente from '../../components/navBarGerente';
import Footer from '../../components/footer';
import './consultarReservasG.css';
import axios from 'axios';

const ConsultarReservasG = () => {
  const [reservas, setReservas] = useState([]);
  const [filtro, setFiltro] = useState('todos');

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3002/Reservas/');
        setReservas(respuesta.data);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    };

    fetchReservas();
  }, []);

  const confirmarReserva = async (index) => {
    const reserva = reservas[index];
    const nuevaReserva = { ...reserva, Estado: 'Confirmada' };

    try {
      await axios.put(`http://localhost:3002/Reservas/${reserva.id}`, nuevaReserva);
      const nuevasReservas = reservas.map((reserva, i) =>
        i === index ? nuevaReserva : reserva
      );
      setReservas(nuevasReservas);
    } catch (error) {
      console.error('Error al confirmar la reserva:', error);
    }
  };

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const reservasFiltradas = reservas.filter((reserva) =>
    filtro === 'todos' ? true : reserva.Estado === filtro
  );

  return (
    <div>
      <NavBarGerente />
      <div className="consultarReservasG-container">
        <h2>Reservas</h2>
        <p>Estas son las últimas reservas que has hecho</p>
        <div className="consultarReservasG-filterContainer">
          <select
            className="consultarReservasG-filterSelect"
            value={filtro}
            onChange={handleFiltroChange}
          >
            <option value="todos">Todos</option>
            <option value="Por Confirmar">Por confirmar</option>
            <option value="Confirmada">Confirmada</option>
            <option value="Asistida">Asistida</option>
            <option value="Cancelada">Cancelada</option>
          </select>
        </div>
        <div className="consultarReservasG-tableContainer">
          <table className="consultarReservasG-table">
            <thead>
              <tr>
                <th className="consultarReservasG-th">Fecha</th>
                <th className="consultarReservasG-th">Hora de inicio</th>
                <th className="consultarReservasG-th">Hora de final</th>
                <th className="consultarReservasG-th">Celular</th>
                <th className="consultarReservasG-th">Correo</th>
                <th className="consultarReservasG-th">Mascota</th>
                <th className="consultarReservasG-th">Estado</th>
                <th className="consultarReservasG-th"></th>
              </tr>
            </thead>
            <tbody>
              {reservasFiltradas.map((reserva, index) => (
                <tr key={reserva.id}>
                  <td className="consultarReservasG-td">{reserva.Fecha}</td>
                  <td className="consultarReservasG-td">{reserva.HoraInicio}</td>
                  <td className="consultarReservasG-td">{reserva.HoraFinal}</td>
                  <td className="consultarReservasG-td">{reserva.Celular}</td>
                  <td className="consultarReservasG-td">{reserva.Correo}</td>
                  <td className="consultarReservasG-td">{reserva.Mascota}</td>
                  <td className="consultarReservasG-td">{reserva.Estado}</td>
                  <td className="consultarReservasG-td">
                    <button
                      className="consultarReservasG-button"
                      onClick={() => confirmarReserva(index)}
                      disabled={reserva.Estado !== 'Por Confirmar'}
                    >
                      {reserva.Estado === 'confirmada' ? 'Confirmado' : 'Confirmar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConsultarReservasG;
