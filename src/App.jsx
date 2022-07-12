import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import ListadoPaciente from './components/ListadoPaciente';
import Formulario from './components/Formulario';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto mt-20">
    <Header></Header>
    <div className='mt-12 md:flex'>
      <Formulario></Formulario>
    <ListadoPaciente></ListadoPaciente>
    </div>
    </div>
  )
}

export default App
