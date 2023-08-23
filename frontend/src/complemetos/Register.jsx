import { useState } from "react";
import Input from "./elemetos/Input";
import Button from "./elemetos/button";
import { register } from "../../utils/loginFunctions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  return (
    <div className="home-container">
      <section className="title-register-s">
        <h1>Rellena los datos:</h1>
      </section>
      <section className="register-info">
        <Input
          placeholder="Nombre..."
          labelContent="Username: "
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Contraseña..."
          labelContent="Contraseña: "
          typeText="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input placeholder="Email.." labelContent="Email: " onChange={(e)=> setEmail(e.target.value)}/>
        <Button contentButton="Registrarse" onClick={() => register(username,password,email, navigate)}/>
      </section>
    </div>
  );
};

export default Register;
