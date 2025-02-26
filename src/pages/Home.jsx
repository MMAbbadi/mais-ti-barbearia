import React from 'react';
import { Link } from 'react-router-dom';
import SimpleSlider from '../components/SimpleSlider';
import { FaMapMarkerAlt, FaConciergeBell, FaStar } from "react-icons/fa";
import { BiSolidDiscount, BiSolidGrid, BiHappyHeartEyes } from "react-icons/bi";
import './Home.css';

const Home = () => {
  return (
    <div>
      <main className="app-container">
        {/* Barra de busca e botão de cadastro */}
        <header className="header">
          <input
            type="text" 
            className="search-bar"
            placeholder="O que Você Está Procurando?"
          />
          <div className="header-buttons">
            <Link to="/register" className="register-button">Cadastro</Link>
          </div>
        </header>

        {/* Carrossel de imagens */}
        <div className="carousel">
          <SimpleSlider />
        </div>

        {/* Categorias */}
        <div className="categories">
          <button>
            <FaMapMarkerAlt />
            <p>Ao Redor</p>
          </button>
          <button>
            <BiSolidDiscount />
            <p>Promoção</p>
          </button>
          <button>
            <FaConciergeBell />
            <p>Novos</p>
          </button>
          <button>
            <BiHappyHeartEyes />
            <p>Best Seller</p>
          </button>
          <button>
            <FaStar />
            <p>Top Avaliação</p>
          </button>
          <button>
            <BiSolidGrid />
            <p>Tudo</p>
          </button>
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
