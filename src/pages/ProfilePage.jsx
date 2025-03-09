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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel magni obcaecati dolor, harum magnam ad, facere dolore at facilis perspiciatis, esse iusto modi sequi corrupti distinctio saepe culpa! Itaque, aliquam?</p>
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
