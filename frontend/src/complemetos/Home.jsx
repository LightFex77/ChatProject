import Button from "./elemetos/button"

const Home = () => {
    return (
        <div className="home-container">
            <section className="welcome-section">
                <h1>Bienvenido</h1>
                <p>Registrate o Incia sesion para empezar a chatear</p>
            </section>
            <section className="account-section">
                <Button contentButton="Iniciar Sesion"/>
                <Button contentButton="Registrarse"/>
            </section>
        </div>
    )
}

export default Home