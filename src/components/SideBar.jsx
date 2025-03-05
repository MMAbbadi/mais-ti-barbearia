import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { FaHome,FaBook,FaConciergeBell,FaHeart,FaShoppingBag  } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { BiExit } from "react-icons/bi";

// Styles
import './SideBar.css'

const SideBar = () => {

    const navigate = useNavigate()
    const toHome = () => navigate('/')
    const toFavos = () => navigate('/favorites')
    const toProfile = () => navigate('/profilepage', {state: {type: "User"}})

  return (
    <>
    {/* SideBar */}
        <nav className="sidebar">
            <div className="logo" onClick={toHome}>
                <FaHome />
            </div>
            <div>
                <nav>
                    <ul className="items">
                        <li className="item">
                            <IoIosMenu />
                        </li>
                        <li className="item" onClick={toFavos}>
                            <FaHeart />
                        </li>
                        <li className="item" onClick={toHome}>
                            <FaHome />
                        </li>
                        <li className="item" onClick={toProfile}>
                            <FaConciergeBell />
                        </li>
                        <li className="item">
                            <FaBook />
                        </li>
                    </ul>
                </nav>
            </div>

            <ul className="lowSideBar">
            {/*Lista de Compra*/}
                <li className="side_button">
                <FaShoppingBag />
                </li>
            {/*Lista de Compra*/}

            {/*LogOut*/}
                <li className="side_button">
                    <BiExit />
                </li>
            {/*LogOut*/}
            </ul>
        </nav>
    {/* SideBar */}
    </>
  )
}

export default SideBar
