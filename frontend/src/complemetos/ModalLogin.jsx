import onClickModal from "../../utils/onClickModal";
import { loginFunctions } from "../../utils/loginFunctions";
import "../styles/interfaceModal.css";
import Input from "./elemetos/Input";
import Button from "./elemetos/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ModalLogin = ({ styleModal, showM, setShowM }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className="modal-class" style={styleModal}>
      <div className="modal-login-container">
        <section className="exit-button-modal">
          <Button
            contentButton="X"
            onClick={() => onClickModal(showM, setShowM)}
            divClassBtn="exit-btn-class-modal"
          />
        </section>
        <section className="login-section-modal">
          <h1>Iniciar Sesion</h1>
        </section>
        <section className="register-info">
          <Input
            placeholder="Username/Email"
            labelContent="Usuario"
            onChange={(e) => setUser(e.target.value)}
            name="email"
          />
          <Input
            placeholder="Contraseña"
            labelContent="Contraseña"
            typeText="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <Button
            contentButton="Ingresar"
            onClick={() => loginFunctions(user, password, navigate)}
          />
        </section>
      </div>
    </div>
  );
};

export default ModalLogin;
