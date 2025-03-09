import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react';

import Modal from '../components/Modal'

// Styles
import classes from './ProfilePage.module.css';
import 'react-calendar/dist/Calendar.css';  

export default function ProfilePage() {
const [openModal, setOpenModal] = useState(false)

  return (
    <div>
        <main className='app-container'>
            {/*Banner Estabelecimento*/}
            <div className={classes.banner}>
                <img src="../assets/images/Barber-posing.jpg" alt="" className={classes.lojaLogo}/>
            </div>
            
            {/*Corpo Pagina*/}
            <div className={classes.main}>
                <section className={classes.sobreLoja}>
                    <div className={classes.nomeFuncionário}>
                        <h1>Evaldir Ribeiro</h1>
                    </div>
                    <p>Evaldir é nosso funcionario mais antigo. <br />
                    Especialista em corte de cabelo, adulto e infantil.
                    Design e corte de barba. <br />
                    Agende um horario com Evaldir Ribeiro e tenha veja o melhor que podemos lhe oferecer
                    </p>
                    <h4>Tipo de atendimento: Seg.  a Sex. das </h4>
                    <h4>Horarios: das 09:00 as 20:00 </h4>
                </section>
                {/* <Modal isOpen={false} setOpenModal={() => setOpenModal(openModal)}>

                </Modal> */}
                <section className={classes.calendario}> 
                    <Calendar 
                    width = {200}
                    onClickDay={() => setOpenModal(true)}
                    />
                </section>

            </div>
        </main>
    </div>
  )
}
