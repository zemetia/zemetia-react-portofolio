import React, {useState} from 'react'
import './nav.css'
import {AiFillHome, AiFillExperiment, AiFillContacts, AiFillCode, AiFillBook } from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
const Nav = () => {
    const [active, setActive] = useState("#")
    return (
        <nav id="nav">
            <a href="#" onClick={() => setActive("#")} className={active === "#" ? 'active' : ''}> <AiFillHome /></a>
            <a href="#about" onClick={() => setActive("#about")} className={active === "#about" ? 'active' : ''}> <BsPersonFill /></a>
            <a href="#portofolio" onClick={() => setActive("#portofolio")} className={active === "#portofolio" ? 'active' : ''}> <AiFillExperiment /></a>
            <a href="#education" onClick={() => setActive("#education")} className={active === "#education" ? 'active' : ''}> <AiFillBook /></a>
            <a href="#skills" onClick={() => setActive("#skills")} className={active === "#skills" ? 'active' : ''}> <AiFillCode /></a>
            <a href="#contact" onClick={() => setActive("#contact")} className={active === "#contact" ? 'active' : ''}> <AiFillContacts /></a>
        </nav>
    )
}

export default Nav