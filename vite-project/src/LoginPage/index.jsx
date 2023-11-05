import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginPage } from "../Routes/register.js";

export const LoginPage = () => {

  const navigate = useNavigate();
  const userRegister = () => {
    navigate("/register")

  }
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginPage)
  });

  const submit = (formData) => {
    console.log("naoo")
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
          {errors.email && <p className="error">{errors.email.message}</p>}
          <label >Sua senha</label>
          <input type="password" placeholder="Sua senha" {...register("password")} />
          {errors.password && <p className="error">{errors.password.message}</p>}
          <button className="log">Entrar</button>
          <button onClick={userRegister}>Cadastre-se</button>
        </form>
      </div>
    </div>
  )

}

