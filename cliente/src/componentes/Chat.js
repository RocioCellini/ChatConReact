import React, {useState, useEffect, useRef} from 'react';
import socket from './Socket';
//import Socket from './Socket';

const Chat = (nombre) => {
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);

    useEffect(()=>{
        socket.emit("conectado", nombre);
    },[nombre]);

    const submit = (e) => {
        e.prevenDefault(); //esto evita que la página se recargue
        socket.emit('mensaje', nombre, mensaje)
    }

    return(
        <form onSubmit={submit}>
            <label htmlFor=''>EScriba su mensaje</label>
            <textarea name='' id='' cols="30" rows="10" value={mensaje} onChange={e=>setMensaje(e.target.value)}></textarea>
            <label>Escriba su edad: </label>
            <button>Enviar</button>
        </form>
    )
}

export default Chat;
