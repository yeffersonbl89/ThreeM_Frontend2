import { useForm } from "react-hook-form";
import './RegistroPage.css'
import LogoThreeM from "../../assets/img/LogoThreeM.png";

function RegistroPage() {
  const { register, handleSubmit } = useForm();

  
  return (
    <div>
      <form onSubmit={ handleSubmit (values => {
        console.log(values);
      })}>
        <div className="Logo">
          <img src={ LogoThreeM } alt="" />
        </div>
        <label htmlFor="">Nombre de Usuario:</label>
        <input type="text" {...register("usuario", { required: true })} placeholder="Ejemplo Three_M" />
        <label htmlFor="">Correo electronico:</label>
        <input type="email" {...register("correo", { required: true })} placeholder="usuario@three_m.com" />
        <label htmlFor="">Contraseña:</label>
        <input type="password" {...register("contrasena", { required: true })} placeholder="********" />

        <button type="submit">
            Registrar
        </button>
      </form>
    </div>
  );
}

export default RegistroPage;
