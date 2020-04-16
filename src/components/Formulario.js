import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
//primer state
const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //segundo state
  const [error, actualizarError] = useState(false);

  //actualizar state con valores del formulario

  const actualizarState = (e) => {
    actualizarCita({
      ...cita, //hacemos esto para copiar el state y conseguir tener todos los valores de los campos y no reescribirlo uno encima de otro
      [e.target.name]: e.target.value,
    });
  };

  //extraer valores ( destructuring) para no poner todo el rato cita.mascota, solo mascota y con los demas igual
  const { mascota, propietario, fecha, hora, sintomas } = cita; //sacamos los valores de cita

  // función del botón de crear cita

  const submitCita = (e) => {
    e.preventDefault();

    //validacion
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    //eliminar mensaje de error
    actualizarError(false);

    //Asignar ID única (hemos instalado npmi uui que genera ids)
    //para añadir un valor de id simplemente accedemos a el :
    cita.id = uuid();

    //Crear cita

    crearCita(cita);

    //Reiniciar el Formulario

    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre dueño</label>
        <input
          type="text"
          name="propietario" //mismo que en el useState de arriba en todos los inputs
          className="u-full-width"
          placeholder="Nombre de Dueño"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
