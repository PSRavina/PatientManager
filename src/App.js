import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  // creamos un state con un arreglo de citas, que inicia vacío
  const [citas, guardarCitas] = useState([]);

  //Creamos una función que coja las tareas actuales más la añadida
  const crearCita = (cita) => {
    guardarCitas([
      ...citas, //cogemos todas las citas que haya, clonando el array, porque si no lo sobreescribimos.
      cita, //le añadimos la cita nueva
    ]);
  };

  return (
    <Fragment>
      <h1>Administración de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}></Formulario>
          </div>

          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita => (
              <Cita
              key={cita.id}
              cita={cita} 
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
