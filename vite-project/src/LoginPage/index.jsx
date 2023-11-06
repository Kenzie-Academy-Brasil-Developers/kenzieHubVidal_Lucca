import { useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginPage } from '../Routes/register.js';
import api from '../services/api.js';

export const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const goRegister = () => {
    navigate("/register")
  }


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginPage),
  });

  const userLogin = async (payload) => {
    try {
      const { data } = await api.post('/sessions', payload);
      localStorage.setItem('@TOKEN', data.token);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const token = localStorage.getItem('@TOKEN');
    if (token) {
      api.get('/profile')
        .then((response) => {
          const data = response.data;
          setUser(data);
          navigate('/dashboard');
        })
        .catch((error) => {
          console.log('Erro na requisição de autologin', error);
          localStorage.removeItem('@TOKEN');
        });
    }
  }, [navigate, setUser]);

  const submit = (payload) => {
    userLogin(payload);
  };
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
          <button onClick={goRegister}>Cadastre-se</button>
        </form>
      </div>
    </div>
  )

}

