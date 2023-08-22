import Input from "./elemetos/input";
import Button from "./elemetos/Button";

const Register = () => {
  return (
    <div className="home-container">
        <section className=""><h1>Rellena los datos:</h1></section>
        <section className="register-info">
            <Input placeholder="Nombre..." labelContent="Username: "/>
            <Input placeholder="Contraseña..." labelContent="Contraseña: " typeText="password"/>
            <Input placeholder="Email.." labelContent="Email: "/>
            <Button contentButton="Registrarse"/>
        </section>

    </div>
  );
};

export default Register;
