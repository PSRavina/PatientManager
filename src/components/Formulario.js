import React, { Fragment } from "react";
const Formulario = () => {
  return (
    <Fragment>
      <form>
        <label>Nombre dueño</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de Mascota"
        />
      </form>
    </Fragment>
  );
};

export default Formulario;
