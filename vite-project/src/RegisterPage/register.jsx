import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegister } from "../Routes/register.js";

export const RegisterPage = () => {

    const navigate = useNavigate();
    const backRegister = () => {
        navigate("/")

    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formRegister)
    });

    const submit = (formData) => {

       
    }

    return (

        <div className="all">
            <div className="logo">
                <h2>Kenzie Hub</h2>
                <button className="back" onClick={backRegister} >Voltar</button>
            </div>

            <div className="form">

                <form onSubmit={handleSubmit(submit)}>
                    <p className="create">Crie sua conta</p>
                    <p className="subtitle">Rápido e grátis, vamos nessa</p>
                    <label >Seu nome</label>
                    <input type="text" placeholder="Nome" {...register("name")} />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                    <label >Seu email</label>
                    <input type="email" placeholder="Digite seu nome" {...register("email")} error={errors.email} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    <label >Sua senha</label>
                    <input type="password" placeholder="Digite sua senha" {...register("password")} />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                    <label >Confirmar senha</label>
                    <input type="password" placeholder="Digite novamente sua senha" {...register("password")} />
                    <label >Contato</label>
                    <input type="contato" placeholder="Opção de contato" {...register("contato")} />
                    <label >Bio</label>
                    <input type="Bio" placeholder="Fale sobre você" {...register("Bio")} />
                    <label >Selecione seu módulo</label>
                    <select name="" id="">
                        <option value="Módulo 1">Módulo 1</option>
                        <option value="Módulo 2">Módulo 2</option>
                        <option value="Módulo 3">Módulo 3</option>
                    </select>
                    <button className="register">Cadastrar</button>


                </form>
            </div>
        </div>
    )


}