import React, { useState } from 'react';
//import Socket from './componentes/Socket';
import socket from './componentes/Socket';
import './App.css';

function App() {
  //socket.emit('conectado', "Hola desde cliente");
  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrar = (e) => {
    e.preventdefault();
    if(nombre !== ""){
      setRegistrado(true);
    }
  }

  return (
    <div className="App">
      <form onSubmit={registrar}>
        <br></br>
        <label htmlFor=''>Introduzca su nombre: </label>
        <br></br><br></br>
        <input value={nombre} onChange={e => setNombre(e.target.value)} />
        <br></br><br></br>
        <button>Ir al chat</button>
      </form>
    </div>
  );
}

export default App;
