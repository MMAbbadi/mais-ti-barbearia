import React from 'react'
import classes from './SideBar.module.css'

const SideBar = () => {
  return (
    <>
    {/* SideBar */}
        <nav>
            <div className={classes.logo}>
                <img src="" alt="" />
            </div>
            <div>
                <nav>
                    <ul>
                        <li>Menu</li>
                        <li>Curtidos</li>
                        <li>Home</li>
                        <li>Agendamentos</li>
                        <li>Serviços</li>
                    </ul>
                </nav>
            </div>
        </nav>
    {/* SideBar */}
    </>
  )
}

export default SideBar
