import Input from "./elemetos/Input";
import Button from "./elemetos/button";

const Register = () => {
  return (
    <div className="home-container">
        <section className="title-register-s"><h1>Rellena los datos:</h1></section>
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
