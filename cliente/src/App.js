import React, { useState } from 'react';
import Chat from './componentes/Chat';
import './App.css';

function App() {
  //socket.emit('conectado', "Hola desde cliente");
  const [nombre, setNombre] = useState("");
  const [registrado, setRegistrado] = useState(false);

  const registrar = (e) => {
    console.log("ingresó");
    //e.preventdefault();
    if(nombre !== ""){
      setRegistrado(true);
      console.log("ingresó registrado");
      console.log(registrado);
    }    
  };

  return (
    <div className="App">
      {
        !registrado &&
        <form onSubmit={registrar}>
          <br></br>
          <label htmlFor=''>Introduzca su nombre: </label>
          <br></br><br></br>
          <input value={nombre} onChange={e => setNombre(e.target.value)} />
          <br></br><br></br>
          <button>Ir al chat</button>
        </form>
      }
      {
        registrado &&
          <Chat nombre={nombre} />
      }
      
    </div>
  );
}

export default App;
