import React from 'react'
import SimpleSlider from './SimpleSlider';
import { FaMapMarkerAlt,FaConciergeBell,FaStar   } from "react-icons/fa";
import { BiSolidDiscount,BiSolidGrid,BiHappyHeartEyes } from "react-icons/bi";
import './Home.css'
const Home = () => {
  return (
    <div>
      <main className="app-container">
        {/* Barra de busca */}
        <header className="header">
          <input
            type="text"
            className="search-bar"
            placeholder="O que Você Está Procurando?"
          />
        </header>

        {/* Carrossel de imagens */}
        <div className="carousel">
          <SimpleSlider/>
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
            { name: 'Barber', logo: 'https://via.placeholder.com/500x100' },
            { name: 'RH Barbearia', logo: 'https://via.placeholder.com/100' },
            { name: 'A Barbearia', logo: 'https://via.placeholder.com/100' },
            { name: 'Lisboa Barbearia', logo: 'https://via.placeholder.com/100' },
            { name: 'Barbearia Premium', logo: 'https://via.placeholder.com/100' },
            { name: 'Ariel Lima Nail', logo: 'https://via.placeholder.com/100' },
            { name: 'Nail Polish', logo: 'https://via.placeholder.com/100' },
            { name: 'You Nails', logo: 'https://via.placeholder.com/100' },
          ].map((item, index) => (
            <div key={index} className="item">
              <img src={item.logo} alt={item.name} className="item-logo" />
              <p>{item.name}</p>
              <button className="favorite-button">❤️</button>
            </div>
          ))}
        </div>  
      </main>
    </div>
  )
}

export default Home
