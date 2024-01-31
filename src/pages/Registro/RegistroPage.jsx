import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistroPage.css";
import LogoThreeM from "../../assets/img/LogoThreeM.png";
import eyeClose from "../../assets/icon/eyeClose.svg";
import eyeOpen from "../../assets/icon/eyeOpen.svg";

function RegistroPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  //Si la autenticacion es true navega al HomePage
  useEffect(() => {
    if (isAuthenticated) navigate("/HomePage")
  }, [isAuthenticated])

  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      signup(values)
      reset();
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        alert("El correo ya está registrado");
      }
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="Logo">
          <img src={LogoThreeM} alt="" />
        </div>

        <label htmlFor="">Nombre de Usuario:</label>
        <input
          type="text"
          {...register("usuario", { required: true })}
          placeholder="Ejemplo Three_M"
        />
        {errors.usuario && (
          <p className="error-message">Este campo es requerido</p>
        )}

        <label htmlFor="">Correo electrónico:</label>
        <input
          type="email"
          {...register("correo", { required: true })}
          placeholder="usuario@three_m.com"
        />
        {errors.correo && (
          <p className="error-message">Este campo es requerido</p>
        )}

        <label htmlFor="contrasena">
          Contraseña:
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              {...register("contrasena", { required: true })}
              placeholder="********"
            />
            <img
              src={showPassword ? eyeOpen : eyeClose}
              alt="Toggle Password Visibility"
              onClick={togglePasswordVisibility}
              className="eye-icon"
            />
          </div>
        </label>
        {errors.contrasena && (
          <p className="error-message">Este campo es requerido</p>
        )}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="BotonesRegistro">
          <button type="submit">Registrar</button>
          <button type="button" onClick={() => reset()}>
            Volver
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistroPage;
