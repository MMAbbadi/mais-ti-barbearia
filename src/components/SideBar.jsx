import React from 'react'
import classes from './SideBar.module.css'
import { FaHome,FaBook,FaConciergeBell,FaHeart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const SideBar = () => {
  return (
    <>
    {/* SideBar */}
        <nav>
            <div className={classes.logo}>
                <FaHome />
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <IoIosMenu />
                        </li>
                        <li>
                            <FaHeart />
                        </li>
                        <li>
                            <FaHome />
                        </li>
                        <li>
                            <FaConciergeBell />
                        </li>
                        <li>
                            <FaBook />
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    {/* SideBar */}
    </>
  )
}

export default SideBar
