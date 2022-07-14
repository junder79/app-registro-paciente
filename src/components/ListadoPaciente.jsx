import React, { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPaciente = ({
  pacientes,
  setPaciente,
  setPacientes,
  eliminarPaciente,
}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
          <p className="mt-5 text-lg mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              setPaciente={setPaciente}
              key={paciente.id}
              paciente={paciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="mt-5 text-lg mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparacerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPaciente;
