import React from "react";


// const Cita = ({AQUI JUSTO PHACEMOS EL DESTRUCTURING DEL STATE DEL QUE QUEREMOS SACAR LA INFO, QUE VIENE POR PROPS PERO 
// GRACIAS A LOS CORCHETES RAROS NOS LO QUITAMOS.{}})

const Cita = ({cita,eliminarCita}) => (
  <div className="cita">
   <p>Mascota: <span>{cita.mascota}</span></p>
   <p>Propietario: <span>{cita.propietario}</span></p>
   <p>Fecha: <span>{cita.fecha}</span></p>
   <p>Hora: <span>{cita.hora}</span></p>
   <p>Síntomas: <span>{cita.sintomas}</span></p>
   <button className="button eliminar u-full-width"
   onClick={()=>eliminarCita(cita.id)}
   >eliminar &times;</button>
  </div>
);

export default Cita;
