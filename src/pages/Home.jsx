import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import  classes from './Home.module.css';

const images = [
  { url: "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_1280.jpg" },
  { url: "images/2.jpg" }
];

const Home = () => {
  const navigate = useNavigate()


  return (
    <div>
      <main className={classes.appContainer}>
        {/* Barra de busca e botões de cadastro/login */}
        <header className={classes.header}>
          <input
            type="text" 
            className={classes.seachBar}
            placeholder="O que você está procurando?"
          />
          <div className={classes.headerButtons}>
            <Link to="/register" className={classes.registerButton}>Cadastro</Link>
            <Link to="/login" className={classes.loginButton}>Login</Link>
          </div>
        </header>

        {/* Carrossel de imagens */}
        <div className={classes.carousel}>
          <SimpleImageSlider
            width={1760}
            height={630}
            images={images}
            showBullets={false}
            showNavs={true}
            loop={true}
            bgColor={"#000000"}
            autoPlay={true}
            autoPlayDelay={3.0}
          />
        </div>

        {/* Banner sobre*/}
        <div className={classes.cta}>
          <section className={classes.container}>
            <h3>Atendimento onde você estiver!</h3>
            <p>Temos uma equipe qualificada a disposição e com disponibilidade de te atender no conforto da sua casa. <br />
            Ou caso prefira, lhe atendemos em nosso espaço dedicado, garantindo conforto e qualidade no atendimento. <br />
            Somos equipados com os conhecimentos e tecnincas mais avançadas no mercado para proporcionar a melhor experiencia <br />e praticidade.
            </p>
          </section>
          <button onClick={() => navigate('/login')}>AGENDE JÁ!</button>
        </div>
        <div className={classes.about}>
          <div className={classes.container2}>
            <h3>CONHEÇA NOSSA HISTORIA</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem at minus quisquam accusantium quibusdam accusamus doloribus alias voluptate facilis modi sed perspiciatis sapiente, saepe sint, fugiat autem quod explicabo tempore! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem quae maiores neque non quis cum iste laboriosam, asperiores nobis distinctio quibusdam sed, accusamus, illum vel tenetur dolorum. Quidem, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores modi blanditiis sed delectus ex a temporibus quaerat deserunt, harum ducimus illo deleniti, molestiae nam optio incidunt quasi ab est quas.</p>
          </div>
        </div>

        <br />
        <br />

      </main>
    </div>
  );
};

export default Home;
