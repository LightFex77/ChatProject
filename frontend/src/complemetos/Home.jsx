import Button from "./elemetos/button";
import ModalLogin from "./ModalLogin";
import onClickModal from "../../utils/onClickModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <ModalLogin styleModal={{ pointerEvents: "unset", opacity: 1 }} showM={showModal} setShowM={setShowModal}/>
      )}
      <div className="home-container">
        <section className="welcome-section">
          <h1>Bienvenido</h1>
          <p>Registrate o Incia sesion para empezar a chatear</p>
        </section>
        <section className="account-section">
          <Button
            contentButton="Iniciar Sesion"
            extraClass="btns-home"
            onClick={() => onClickModal(showModal, setShowModal)}
          />
          <Button contentButton="Registrarse" extraClass="btns-home" />
        </section>
      </div>
    </>
  );
};

export default Home;
