import { set, useForm } from "react-hook-form";
import { useState } from "react";
import { registerRequest } from "../../api/auth";
import './RegistroPage.css'
import LogoThreeM from "../../assets/img/LogoThreeM.png";
import eyeClose from "../../assets/icon/eyeClose.svg";
import eyeOpen from "../../assets/icon/eyeOpen.svg";

function RegistroPage() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  
  return (
    <div>
      <form onSubmit={ handleSubmit (async (values) => {
        console.log(values);
        const res = await registerRequest(values);
        console.log(res);
      })}>
        <div className="Logo">
          <img src={ LogoThreeM } alt="" />
        </div>
        <label htmlFor="">Nombre de Usuario:</label>
        <input type="text" {...register("usuario", { required: true })} placeholder="Ejemplo Three_M" />
        <label htmlFor="">Correo electronico:</label>
        <input type="email" {...register("correo", { required: true })} placeholder="usuario@three_m.com" />
        <label  htmlFor="contrasena">
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

        <div className="BotonesRegistro">
        <button type="submit">
            Registrar
        </button>
        <button type="submit">
            Volver
        </button>
        </div>
      </form>
    </div>
  );
}

export default RegistroPage;
