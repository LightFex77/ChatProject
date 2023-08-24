import { useState } from "react";
import Input from "./elemetos/Input";
import Button from "./elemetos/button";
import { register } from "../../utils/loginFunctions";
import { useNavigate } from "react-router-dom";
import { useRedirectToChat } from "../hooks/useRedirect";
import { useFormik } from "formik";
import * as Yup from "yup"

const Register = () => {
  useRedirectToChat();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },validationSchema: Yup.object({
      username: Yup.string().required("Usuario requerido"),
      password: Yup.string().required("Contraseña requerida"),
      email: Yup.string().email().required("Email requerido")
    }),
    onSubmit: (formData) => {
      console.log(formData);
      register(formData.username, formData.password, formData.email, navigate);
    },
  });
  const handleInputChange = (e) => {
    // Obtén el nombre del campo y el nuevo valor
    const { name, value } = e.target;

    // Actualiza el estado correspondiente con una cadena vacía
    if (name === "usermane") {
      setUsernameErrorForm("");
    } else if (name === "password") {
      setPasswordErrorForm("");
    }else if(name === "email"){
      setEmailErrorForm("");
    }

    // Actualiza los valores de formik
    formik.setFieldValue(name, value);
  };
  const navigate = useNavigate();
  const [usernameErrorForm, setUsernameErrorForm] = useState("");
  const [passwordErrorForm, setPasswordErrorForm] = useState("");
  const [emailErrorForm, setEmailErrorForm] = useState("");
  return (
    <div className="home-container">
      <section className="title-register-s">
        <h1>Rellena los datos:</h1>
      </section>
      <form className="register-info">
        <Input
          placeholder="Nombre..."
          labelContent="Username: "
          onChange={handleInputChange}
          name="username"
          error={formik.errors.username ?? usernameErrorForm}
        />
        <Input
          placeholder="Contraseña..."
          labelContent="Contraseña: "
          typeText="password"
          onChange={handleInputChange}
          name="password"
          error={formik.errors.password ?? passwordErrorForm}
        />
        <Input
          placeholder="Email.."
          labelContent="Email: "
          onChange={handleInputChange}
          name="email"
          error={formik.errors.email ?? emailErrorForm}
        />
        <Button
          contentButton="Registrarse"
        />
      </form>
    </div>
  );
};

export default Register;
