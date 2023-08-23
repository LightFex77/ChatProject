import onClickModal from "../../utils/onClickModal";
import { loginFunctions } from "../../utils/loginFunctions";
import "../styles/interfaceModal.css";
import Input from "./elemetos/Input";
import Button from "./elemetos/button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// eslint-disable-next-line react/prop-types
const ModalLogin = ({ styleModal, showM, setShowM }) => {
  const formik = useFormik({
    initialValues: {
      user: "",
      password: ""
    },
    validationSchema: Yup.object({
      user: Yup.string().required(),
      password: Yup.string().required()
    }),
    onSubmit: (formData) => {
      console.log(formData);
      loginFunctions(formData.user, formData.password, navigate)
    }
  });
  const navigate = useNavigate();

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
            onChange={(formik.handleChange)}
            name="user"
          />
          <Input
            placeholder="Contraseña"
            labelContent="Contraseña"
            typeText="password"
            onChange={formik.handleChange}
            name="password"
          />
          <Button
            contentButton="Ingresar"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalLogin;
