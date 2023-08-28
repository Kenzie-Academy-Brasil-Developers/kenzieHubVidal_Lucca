import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {

  const navigate = useNavigate();
  const userRegister = () => {
    navigate("/register")

  }

  const { register, handleSubmit } = useForm();

  const submit = (formData) => {


  }

  return (
    <div>
      <div className="logoLogin">
        <h2>Kenzie Hub</h2>

      </div>
      <div className="formLogin">
        <form onSubmit={handleSubmit(submit)}>
          <h3>Login</h3>
          <label >Seu email</label>
          <input type="email" placeholder="Email" {...register("email")} />
          <label >Sua senha</label>
          <input type="password" placeholder="Sua senha" {...register("password")} />
          <button className="log">Entrar</button>
          <button onClick={userRegister}>Cadastre-se</button>
        </form>
      </div>
    </div>
  )

}

