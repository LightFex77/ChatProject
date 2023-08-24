import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useRedirectToHome } from '../hooks/useRedirect';

const FormSubmit = () => {
  useRedirectToHome();
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);

  // TODO: llevar a un hook
  useEffect(() => {
    // Conectar al servidor de Socket.io
    const socket = io('http://localhost:3000');
    setSocket(socket);

    // Obtener el ID de socket asignado por el servidor
    socket.on('connect', () => {
      const userId = localStorage.getItem('userMine');
      const userObj = JSON.parse(userId);
      setUserId(userObj.user.username);
    });

    // Escuchar mensajes del servidor
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Limpiar al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar el mensaje al servidor con el ID de usuario
    socket.emit('message', { body: message, userId });

    // Limpiar el campo de entrada
    setMessage('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        <ul className="list-messages">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`li-message li-message-${
                msg.userId === userId ? 'right' : 'left'
              }`}>
              <span
                className="initial-name"
                style={
                  msg.userId === userId
                    ? { background: '#4F8136' }
                    : { background: '#48494D' }
                }>
                {msg.userId.charAt(0)}
              </span>
              <div className="li-message-contenido">
                <span className="span-message">{msg.body}</span>
                {msg.userId !== userId ? (
                  <button className="like-message-button">
                    <svg id="Layer_1" viewBox="0 0 60 60">
                      <polygon points="29.85 24.27 16.15 10.58 3.08 23.66 16.77 37.35 29.85 50.43 29.85 50.43 42.93 37.35 42.93 37.35 56.63 23.65 43.55 10.57 29.85 24.27" />
                    </svg>
                    <span className="likes-count">{msg.likes ?? 0}</span>
                  </button>
                ) : (
                  <span className="likes-count">{msg.likes ?? 0}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sumbit-messages">
        <form onSubmit={handleSubmit} className="input-button-messages">
          <input
            type="text"
            placeholder="Escribe tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FormSubmit;
