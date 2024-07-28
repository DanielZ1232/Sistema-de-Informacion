document.addEventListener('DOMContentLoaded', function() {
  // Lista completa de empleados (ejemplo)
  const completeEmployeeList = [
    { name: 'Luis Lugo' },
    { name: 'Daniel Zuñiga' },
    { name: 'Miguel Uran'}
  ];

  // Recupera la lista de empleados actuales desde Local Storage o usa una lista vacía
  let employees = JSON.parse(localStorage.getItem('employees')) || [];

  const modal = document.getElementById('employeeModal');
  const btn = document.getElementById('addEmployeeBtn');
  const span = document.getElementsByClassName('close')[0];
  const addEmployeeConfirmBtn = document.getElementById('addEmployeeConfirmBtn');
  const teamMembers = document.getElementById('teamMembers');
  const employeeSearch = document.getElementById('employeeSearch');
  const employeeList = document.getElementById('employeeList');

  // Función para actualizar la lista de empleados en el modal (busca en la lista completa)
  function updateEmployeeList(searchTerm) {
    employeeList.innerHTML = '';
    const filteredEmployees = completeEmployeeList.filter(emp =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).filter(emp => !employees.some(e => e.name === emp.name)); // Excluir empleados ya agregados
    filteredEmployees.forEach(emp => {
      const li = document.createElement('li');
      li.textContent = emp.name;
      li.onclick = () => {
        employeeSearch.value = emp.name;
      };
      employeeList.appendChild(li);
    });
  }

  // Función para mostrar los empleados en la página principal
  function renderEmployees() {
    teamMembers.innerHTML = ''; // Limpiar los empleados existentes
    employees.forEach((emp, index) => {
      const newEmployeeDiv = document.createElement('div');
      newEmployeeDiv.classList.add('team-member');
      newEmployeeDiv.innerHTML = `
        <img src="../img/usuario.png" alt="Team Member Profile Pic">
        <h3>${emp.name}</h3>
        <button class="delete-btn" data-index="${index}">Eliminar</button>
      `;
      teamMembers.appendChild(newEmployeeDiv);
    });
  }

  // Mostrar la ventana emergente al hacer clic en el botón
  btn.onclick = function() {
    modal.style.display = 'block';
    updateEmployeeList('');
  }

  // Cerrar la ventana emergente al hacer clic en la "x"
  span.onclick = function() {
    modal.style.display = 'none';
  }

  // Cerrar la ventana emergente al hacer clic fuera de ella
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  // Buscar empleados al escribir en el campo de búsqueda
  employeeSearch.oninput = function() {
    updateEmployeeList(employeeSearch.value);
  };

  // Agregar nuevo empleado al hacer clic en "Agregar" dentro de la ventana emergente
  addEmployeeConfirmBtn.onclick = function() {
    const newEmployeeName = employeeSearch.value.trim();
    if (newEmployeeName) {
      if (!employees.some(emp => emp.name === newEmployeeName)) {
        employees.push({ name: newEmployeeName });
        localStorage.setItem('employees', JSON.stringify(employees));
        renderEmployees();
        alert(`Empleado ${newEmployeeName} agregado`);
        modal.style.display = 'none';
        employeeSearch.value = '';
        employeeList.innerHTML = '';
      } else {
        alert('El empleado ya está agregado');
      }
    } else {
      alert('Por favor ingrese el nombre del empleado');
    }
  }

  // Manejar clic en el botón de eliminación
  teamMembers.onclick = function(event) {
    if (event.target.classList.contains('delete-btn')) {
      const index = event.target.getAttribute('data-index');
      employees.splice(index, 1); // Eliminar el empleado de la lista
      localStorage.setItem('employees', JSON.stringify(employees)); // Actualizar Local Storage
      renderEmployees(); // Actualizar la vista
    }
  }

  renderEmployees();
});
