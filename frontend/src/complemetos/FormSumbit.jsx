import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useRedirectToHome } from "../hooks/useRedirect";

const FormSubmit = () => {
  useRedirectToHome();
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState(null);
  const [idUser, setIdUser] = useState(null);

  useEffect(() => {
    // Conectar al servidor de Socket.io
    const socket = io("http://localhost:3000");
    setSocket(socket);

    socket.on("connect", () => {
      const userId = localStorage.getItem("userMine");
      const userObj = JSON.parse(userId);
      setUserName(userObj.user.username);
      setIdUser(userObj.user.id);
    });

    socket.on("message", (data) => {
      if (!messages.some((msg) => msg.messageId === data.messageId)) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    socket.on("likes", (updatedMessage) => {
      // Actualizar el mensaje en el estado local
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.messageId === updatedMessage.messageId ? updatedMessage : msg
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const generateMessageId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const msjId = generateMessageId();
    const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Enviar el mensaje al servidor con el ID de usuario
    await socket.emit("message", {
      body: message,
      userId: userName,
      messageId: msjId,
      creationTime: hora,
      likes: [],
    });

    // Limpiar el campo de entrada
    setMessage("");
  };

  const handleLikes = async (messageId) => {
    // Emitir el evento "likes" al servidor con el ID del mensaje y el ID del usuario
    socket.emit("likes", { messageId: messageId, userId: idUser });
  };

  return (
    <div className="chat-container">
      <div className="messages">
        <ul className="list-messages">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`li-message li-message-${
                msg.userId === userName ? "right" : "left"
              }`}
            >
              <span
                className="initial-name"
                style={
                  msg.userId === userName
                    ? { background: "#4F8136" }
                    : { background: "#48494D" }
                }
              >
                {msg.userId.charAt(0)}
              </span>
              <div className="li-message-contenido">
                <p><span>{`[${msg.creationTime}]`}</span> {msg.userId}</p>
                <span className="span-message">{msg.body}</span>
                {msg.userId !== userName ? (
                  <button
                    className="like-message-button"
                    onClick={() => handleLikes(msg.messageId)}
                  >
                    <svg id="Layer_1" viewBox="0 0 60 60">
                      <polygon points="29.85 24.27 16.15 10.58 3.08 23.66 16.77 37.35 29.85 50.43 29.85 50.43 42.93 37.35 42.93 37.35 56.63 23.65 43.55 10.57 29.85 24.27" />
                    </svg>
                    <span className="likes-count">{msg.likes.length ?? 0}</span>
                  </button>
                ) : (
                  <span className="likes-count">{msg.likes.length ?? 0}</span>
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
