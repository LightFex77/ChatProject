import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useRedirectToHome} from "../hooks/useRedirect";

const FormSubmit = () => {
 useRedirectToHome();
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Conectar al servidor de Socket.io
    const socket = io("http://localhost:3000");
    setSocket(socket);

    // Obtener el ID de socket asignado por el servidor
    socket.on("connect", () => {
      setUserId(socket.id);
    });

    // Escuchar mensajes del servidor
    socket.on("message", (data) => {
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
    socket.emit("message", { body: message, userId });

    // Limpiar el campo de entrada
    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="messages">
        <ul className="list-messages">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`li-message-${
                msg.userId === userId ? "right" : "left"
              }`}
            >
              <span className="initial-name">{msg.userId.charAt(0)}</span>
              <span className="span-message">{msg.body}</span>
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
