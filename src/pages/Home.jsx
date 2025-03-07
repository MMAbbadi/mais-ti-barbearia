import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import { FaMapMarkerAlt, FaConciergeBell, FaStar } from "react-icons/fa";
import { BiSolidDiscount, BiSolidGrid, BiHappyHeartEyes } from "react-icons/bi";
import './Home.css';

const images = [
  { url: "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_1280.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

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
            placeholder="O que você está procurando?"
          />
          <div className="header-buttons">
            <Link to="/register" className="register-button">Cadastro</Link>
            <Link to="/login" className="login-button">Login</Link>
          </div>
        </header>

        {/* Carrossel de imagens */}
        <div className="carousel">
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>

        {/* Banner sobre*/}
        <div className="cta">
          <h3>Atendimento onde você estiver!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia cumque ea dolorum explicabo reiciendis amet necessitatibus velit, maxime repudiandae tempore sapiente adipisci. Similique ipsum maiores commodi quae error facere!</p>
          <button onClick={{/*isLoged && user == "service" ? () => navigate('/profilepage') : () => navigate('/login')*/}}>AGENDE JÁ!</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
