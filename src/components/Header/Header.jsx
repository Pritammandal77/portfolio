import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
function Header() {

    const HandleOpenHamburger = () => {
        let hamburgerDiv = document.querySelector(".HamburgerDiv")
        hamburgerDiv.style.display = "flex";
    }

    const HandleCloseHamburger = () => {
        let hamburgerDiv = document.querySelector(".HamburgerDiv")
        hamburgerDiv.style.display = "none";
    }

    return (
        <>
            <header>
                <nav className="navBar">
                    <div className="part1">
                        <a href="#home">
                            <p>{" < Pritam />"}</p>
                        </a>
                    </div>
                    <div className="part2">
                        <ul className="pcNav">
                            <a href="#home">Home</a>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#contactme">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                    <div className="iconToOpenHamburger">
                        <i className="fa-solid fa-bars" id='menuIcon' style={{ color: 'white' }} onClick={HandleOpenHamburger}></i>
                    </div>
                    <div className="HamburgerDiv">
                        <ul className="Hamburgerul bg-gray-900">
                            <li id='xMark'>
                                <i className="fa-solid fa-xmark"
                                    style={{ color: 'white' }} onClick={HandleCloseHamburger}></i>
                            </li>

                            <li onClick={HandleCloseHamburger} className='hamLi'>
                                <i className="fa-solid fa-house"></i>
                                <a href="#home">Home</a>
                            </li>

                            <li onClick={HandleCloseHamburger} className='hamLi'>
                                <i className="fa-solid fa-info-circle"></i>
                                <a href="#about">About</a>
                            </li>
                            <li onClick={HandleCloseHamburger} className='hamLi'>

                                <i className="fa-solid fa-list-check"></i>
                                <a href="#skills">Skills</a>
                            </li>
                            <li onClick={HandleCloseHamburger} className='hamLi'>
                                <i className="fa-solid fa-briefcase"></i>
                                <a href="#projects">Projects</a>
                            </li>
                            <li onClick={HandleCloseHamburger} className='hamLi'>
                                <i className="fa-solid fa-address-card"></i>
                                <a href="#contactme">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </nav>


            </header>
        </>
    );
}

export default Header;
