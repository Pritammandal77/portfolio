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
                        <p>{" < Pritam />"}</p>
                    </div>
                    <div className="part2">
                        <ul className="pcNav">
                            <li><NavLink to='/' className="diffPages"
                                style={({ isActive }) => ({
                                    color: isActive ? "#4cff4c" : "white",
                                    fontWeight: isActive ? "600" : "400",
                                })}>Home</NavLink></li>
                            <li>
                                <NavLink to='/about' className="diffPages"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#4cff4c" : "white",
                                        fontWeight: isActive ? "600" : "400",
                                    })}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/skills' className="diffPages"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#4cff4c" : "white",
                                        fontWeight: isActive ? "600" : "400",
                                    })}>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to='/projects' className="diffPages"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#4cff4c" : "white",
                                        fontWeight: isActive ? "600" : "400",
                                    })}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contactme' className="diffPages"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#4cff4c" : "white",
                                        fontWeight: isActive ? "600" : "400",
                                    })}>Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="iconToOpenHamburger">
                        <i className="fa-solid fa-bars" id='menuIcon' style={{ color: 'white' }} onClick={HandleOpenHamburger}></i>
                    </div>
                    <div className="HamburgerDiv">
                        <ul className="Hamburgerul">
                            <li id='xMark'>
                                <i className="fa-solid fa-xmark"
                                    style={{ color: 'white' }} onClick={HandleCloseHamburger}></i>
                            </li>
                            <li><NavLink to='/' className="Hamburgerli"
                                style={({ isActive }) => ({
                                    color: isActive ? "#4cff4c" : "white",
                                    fontWeight: isActive ? "600" : "400",
                                })}
                                onClick={HandleCloseHamburger}>Home</NavLink></li>
                            <li>
                                <NavLink to='/about' className="Hamburgerli"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#4cff4c" : "white",
                                        fontWeight: isActive ? "600" : "400",
                                    })}
                                    onClick={HandleCloseHamburger}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/skills' className="Hamburgerli"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#4cff4c" : "white",
                                        fontWeight: isActive ? "600" : "400",
                                    })}
                                    onClick={HandleCloseHamburger}>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to='/projects' className="Hamburgerli"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#4cff4c" : "white",
                                        fontWeight: isActive ? "600" : "400",
                                    })}
                                    onClick={HandleCloseHamburger}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contactme' className="Hamburgerli"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#4cff4c" : "white",
                                        fontWeight: isActive ? "600" : "400",
                                    })}
                                    onClick={HandleCloseHamburger}>Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>


            </header>
        </>
    );
}

export default Header;
