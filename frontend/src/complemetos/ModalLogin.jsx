import onClickModal from "../../utils/onClickModal";
import { loginFunctions } from "../../utils/loginFunctions";
import "../styles/interfaceModal.css";
import Input from "./elemetos/Input";
import Button from "./elemetos/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
// eslint-disable-next-line react/prop-types
const ModalLogin = ({ styleModal, showM, setShowM }) => {
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("username o email requerida"),
      password: Yup.string().required("contraseña requerida"),
    }),
    onSubmit: (formData) => {
      loginFunctions(
        formData.user,
        formData.password,
        navigate,
        setErrorInvalidDataUser,
        setErrorInvalidDataPassword
      );
    },
  });

  const handleInputChange = (e) => {
    // Obtén el nombre del campo y el nuevo valor
    const { name, value } = e.target;

    // Actualiza el estado correspondiente con una cadena vacía
    if (name === "user") {
      setErrorInvalidDataUser("");
    } else if (name === "password") {
      setErrorInvalidDataPassword("");
    }

    // Actualiza los valores de formik
    formik.setFieldValue(name, value);
  };

  const navigate = useNavigate();
  const [errorInvalidDataUser, setErrorInvalidDataUser] = useState("");
  const [errorInvalidDataPassword, setErrorInvalidDataPassword] = useState("");

  return (
    <div className="modal-class" style={styleModal}>
      <div className="modal-login-container">
        <section className="exit-button-modal">
          <Button
            contentButton="X"
            onClick={() => onClickModal(showM, setShowM)}
            divClassBtn="exit-btn-class-modal"
          />
        </section>
        <section className="login-section-modal">
          <h1>Iniciar Sesion</h1>
        </section>
        <form className="register-info" onSubmit={formik.handleSubmit}>
          <Input
            placeholder="Username/Email"
            labelContent="Usuario"
            onChange={handleInputChange}
            name="user"
            error={formik.errors.user ?? errorInvalidDataUser}
          />
          <Input
            placeholder="Contraseña"
            labelContent="Contraseña"
            typeText="password"
            onChange={handleInputChange}
            name="password"
            error={formik.errors.password ?? errorInvalidDataPassword}
          />
          <Button contentButton="Ingresar" />
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
