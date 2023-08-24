import Button from './elemetos/button';
import ModalLogin from './ModalLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRedirectToChat } from '../hooks/useRedirect';

const Home = () => {
  useRedirectToChat();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <ModalLogin
          styleModal={{ pointerEvents: 'unset', opacity: 1 }}
          showM={showModal}
          setShowM={setShowModal}
        />
      )}
      <div className="home-container">
        <section className="welcome-section">
          <h1>Bienvenido</h1>
          <p>Regístrate o Inicia sesión para empezar a chatear</p>
        </section>
        <section className="account-section">
          <Button
            contentButton="Iniciar Sesion"
            extraClass="btns-home"
            onClick={() => setShowModal(!showModal)}
          />
          <Button
            contentButton="Registrarse"
            extraClass="btns-home"
            onClick={() => navigate('/register-account')}
          />
        </section>
      </div>
    </>
  );
};

export default Home;
