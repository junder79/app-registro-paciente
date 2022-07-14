import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";
import Formulario from "./components/Formulario";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };
  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        ></Formulario>
        <ListadoPaciente
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          eliminarPaciente={eliminarPaciente}
        ></ListadoPaciente>
      </div>
    </div>
  );
}

export default App;
