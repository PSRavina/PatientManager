import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

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

//useEffect  para realizar acciones cuando el state cambia. Entre corchetes va, cuando se ejecuta,(el state que cambia)
//siempre un arrow function porque espera a que cambie

useEffect(()=>{},[citas])

  //Función de eliminar cita por ID:

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id); //aqui es diferente al id porque selecciona un id determinado y se olvida los demas
    guardarCitas(nuevasCitas);
  };

  //mensaje condicional
  const titulo = citas.length === 0 ? "No hay Citas" : "Administra tus Citas";

  return (
    <Fragment>
      <h1>Administración de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}></Formulario>
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
