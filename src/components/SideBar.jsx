import React from 'react'
import './SideBar.css'
import { FaHome,FaBook,FaConciergeBell,FaHeart,FaShoppingBag  } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { BiSolidShoppingBagAlt,BiExit } from "react-icons/bi";

const SideBar = () => {
  return (
    <>
    {/* SideBar */}
        <nav className="sidebar">
            <div className="logo">
                <FaHome />
            </div>
            <div>
                <nav>
                    <ul className="items">
                        <li className="item">
                            <IoIosMenu />
                        </li>
                        <li className="item">
                            <FaHeart />
                        </li>
                        <li className="item">
                            <FaHome />
                        </li>
                        <li className="item">
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
