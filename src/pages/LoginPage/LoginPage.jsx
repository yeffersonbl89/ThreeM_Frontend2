import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { loginUsuario } from "../../api/auth";
import './loginPage.css'
import LogoThreeM from "../../assets/img/LogoThreeM.png";
import eyeClose from "../../assets/icon/eyeClose.svg";
import eyeOpen from "../../assets/icon/eyeOpen.svg";

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage] = useState('');
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  
  const onSubmit = async (data) => {
    try {
      const res = await loginUsuario(data);
      console.log(res);

      // Verifica si la respuesta fue exitosa y realiza la redirección
      if (res.status === 200) {
        navigate('/HomePage');
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage('Credenciales incorrectas. Verifica tu correo y contraseña.');
        } else {
          setErrorMessage('Ocurrió un error en la autenticación');
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Logo">
          <img src={LogoThreeM} alt="" />
        </div>        

        <label htmlFor="">Correo electrónico:</label>
        <input type="email" {...register('correo', { required: true })} placeholder="usuario@three_m.com" />
        {errors.correo && <p className="error-message">Este campo es requerido</p>}

        <label htmlFor="contrasena">
          Contraseña:
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('contrasena', { required: true })}
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
        {errors.contrasena && <p className="error-message">Este campo es requerido</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="BotonesRegistro">
          <button type="submit">Ingresar</button>
          <button type="button" >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage