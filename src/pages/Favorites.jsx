import  react from 'react';
import './Favorites.css'

export default function Favorites() {
  return (
    <>
      <div className="favorite-list">
        {[
          { name: 'Barber', logo: 'https://via.placeholder.com/250x550' },
          { name: 'RH Barbearia', logo: 'https://via.placeholder.com/100' },
          { name: 'A Barbearia', logo: 'https://via.placeholder.com/100' },
          { name: 'Lisboa Barbearia', logo: 'https://via.placeholder.com/100' },
          { name: 'Barbearia Premium', logo: 'https://via.placeholder.com/100' },
          { name: 'Ariel Lima Nail', logo: 'https://via.placeholder.com/100' },
          { name: 'Nail Polish', logo: 'https://via.placeholder.com/100' },
          { name: 'You Nails', logo: 'https://via.placeholder.com/100' },
        ].map((item, index) => (
          <div key={index} className="favorite">
            <img src={item.logo} alt={item.name} className="favorite-logo" />
            <p>{item.name}</p>
            <button className="favorite-button">❤️</button>
          </div>
        ))}
      </div>
    </>
  )
}