import onClickModal from "../../utils/onClickModal";
import "../styles/interfaceModal.css";
import Input from "./elemetos/Input";
import Button from "./elemetos/button";
// eslint-disable-next-line react/prop-types
const ModalLogin = ({ styleModal, showM, setShowM }) => {
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
          <Input placeholder="Username/Email" labelContent="Usuario" />
          <Input
            placeholder="Contraseña"
            labelContent="Contraseña"
            typeText="password"
          />
          <Button contentButton="Ingresar" />
        </section>
      </div>
    </div>
  );
};

export default ModalLogin;
