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

        {/* Lista de itens */}
        <div className="item-list">
          {[
            { name: 'Barber', logo: 'https://www.shutterstock.com/image-vector/barbershop-logo-vintage-classic-style-600w-1526776814.jpg' },
            { name: 'RH Barbearia', logo: 'https://www.shutterstock.com/image-vector/barbershop-logo-vintage-classic-style-600w-1526776814.jpg' },
            { name: 'A Barbearia', logo: 'https://www.shutterstock.com/image-vector/barbershop-logo-vintage-classic-style-600w-1526776814.jpg' },
            { name: 'Lisboa Barbearia', logo: 'https://www.shutterstock.com/image-vector/barbershop-logo-vintage-classic-style-600w-1526776814.jpg' },
            { name: 'Barbearia Premium', logo: 'https://www.shutterstock.com/image-vector/barbershop-logo-vintage-classic-style-600w-1526776814.jpg' },
            { name: 'Ariel Lima Nail', logo: 'https://www.shutterstock.com/image-vector/barbershop-logo-vintage-classic-style-600w-1526776814.jpg' },
            { name: 'Nail Polish', logo: 'https://www.shutterstock.com/image-vector/barbershop-logo-vintage-classic-style-600w-1526776814.jpg' },
            { name: 'You Nails', logo: 'https://www.shutterstock.com/image-vector/barbershop-logo-vintage-classic-style-600w-1526776814.jpg' },
          ].map((item, index) => (
            <div key={index} className="item">
              <img src={item.logo} alt={item.name} className="item-logo" />
              <p>{item.name}</p>
               {/* <button className="favorite-button">❤️</button> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
