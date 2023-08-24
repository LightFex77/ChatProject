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
      email: Yup.string().email("email invalido").required("Email requerido")
    }),
    onSubmit: (formData) => {
      register(formData.username, formData.password, formData.email, navigate);
    },
  });

  const navigate = useNavigate();
  return (
    <div className="home-container" onSubmit={formik.handleSubmit}>
      <section className="title-register-s">
        <h1>Rellena los datos:</h1>
      </section>
      <form className="register-info">
        <Input
          placeholder="Nombre..."
          labelContent="Username: "
          onChange={formik.handleChange}
          name="username"
          error={formik.errors.username}
        />
        <Input
          placeholder="Contraseña..."
          labelContent="Contraseña: "
          typeText="password"
          onChange={formik.handleChange}
          name="password"
          error={formik.errors.password}
        />
        <Input
          placeholder="Email.."
          labelContent="Email: "
          onChange={formik.handleChange}
          name="email"
          error={formik.errors.email}
        />
        <Button
          contentButton="Registrarse"
        />
      </form>
    </div>
  );
};

export default Register;
