import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SimpleSlider from '../components/SimpleSlider';
import { FaMapMarkerAlt, FaConciergeBell, FaStar } from "react-icons/fa";
import { BiSolidDiscount, BiSolidGrid, BiHappyHeartEyes } from "react-icons/bi";
import './Home.css';

const Home = () => {
  const navigate = useNavigate()


  return (
    <div>
      <main className="app-container">
        {/* Barra de busca e botões de cadastro/login */}
        <header className="header">
          <input
            type="text" 
            className="search-bar"
            placeholder="O que Você Está Procurando?"
          />
          <div className="header-buttons">
            <Link to="/register" className="register-button">Cadastro</Link>
            <Link to="/login" className="login-button">Login</Link>
          </div>
        </header>

        {/* Carrossel de imagens */}
        <div className="carousel">
          <SimpleSlider />
        </div>
      </main>
    </div>
  );
};

export default Home;
