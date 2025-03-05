import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logotipo da Barbearia */}
        <div className="logo-container">
          <FaUserCircle size={60} color="white" />
          <h2>Barbearia Elite</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Campo de e-mail com ícone */}
          <div className="input-group">
            <label><FaEnvelope /> Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo de senha com ícone */}
          <div className="input-group">
            <label><FaLock /> Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Botão de login estilizado */}
          <button type="submit" className="login-button">Entrar</button>
        </form>

        {/* Link de cadastro mais estilizado */}
        <p className="register-text">
          Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
