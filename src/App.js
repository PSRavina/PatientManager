import React, { Fragment } from "react";
import PatientList from "./patientList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Fragment>
      <h1>Administración de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            1<Formulario></Formulario>
          </div>

          <div className="one-half column">
            2<Formulario></Formulario>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
