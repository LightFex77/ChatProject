import Button from "./elemetos/button"
import ModalLogin from "./ModalLogin"
import { useState } from "react"

const Home = () => {
    const [showModal, setShowModal] = useState(true);
    return (
        <>
        {showModal && (<ModalLogin />)}
            <div className="home-container">
            <section className="welcome-section">
                <h1>Bienvenido</h1>
                <p>Registrate o Incia sesion para empezar a chatear</p>
            </section>
            <section className="account-section">
                <Button contentButton="Iniciar Sesion" extraClass="btns-home"/>
                <Button contentButton="Registrarse" extraClass="btns-home"/>
            </section>
        </div>
        </>
    )
}

export default Home