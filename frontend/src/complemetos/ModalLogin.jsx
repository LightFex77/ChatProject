import "../styles/interfaceModal.css"
import Input from './elemetos/Input'
import Button from "./elemetos/button"
const ModalLogin = () => {
    return (
        <div className="modal-class">
            <div className="modal-login-container">
                <section className="login-section-modal"><h1>Iniciar Sesion</h1></section>
                <section className="register-info">
                    <Input placeholder="Username" labelContent="Usuario"/>
                    <Input placeholder="Contraseña" labelContent="Contraseña"/>
                    <Button contentButton="Ingresar"/>
                </section>
            </div>
        </div>
    )
}

export default ModalLogin