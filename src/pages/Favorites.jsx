import  react from 'react';
import './Favorites.css'

export default function Favorites() {
  return (
    <>
      <div className="favorite-list">
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