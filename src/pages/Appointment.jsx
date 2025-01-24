import React from 'react'
import classes from './Appointment.module.css'

export default function Appointment() {
  return (
    <div>
        <main className='app-container'>
            {/*Banner Estabelecimento*/}
            <div className={classes.banner}>
                <div src="" alt="" className={classes.lojaLogo}/>
            </div>
            
            {/*Corpo Pagina*/}
            <div className={classes.main}>
                <section className={classes.sobreLoja}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel magni obcaecati dolor, harum magnam ad, facere dolore at facilis perspiciatis, esse iusto modi sequi corrupti distinctio saepe culpa! Itaque, aliquam?</p>
                    <h4>Tipo de atendimento: </h4>
                    <h4>Horarios: </h4>
                </section>

                <section className={classes.calendario}> 
                    <div src="" alt="" className={classes.displayCal}/>
                </section>
            </div>
        </main>
    </div>
  )
}
