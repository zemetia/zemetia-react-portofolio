import React, {useRef, useState} from 'react'
import HeaderSocials from './HeaderSocial'
import ThreeFlex from './ThreeFlex'
import './header.css'


const Header = () => {
    //if (!props.data) return null;
    return (
        <header> 
            <ThreeFlex />
        </header>
    )
}
/*
    
            <div className="container header__container">
                <h5 className="text-light">Fullstack Developer, Data Scientist, and Quantum Computing Enthusiast</h5>
                <CTA />
                
                <HeaderSocials />
            </div>
            
            

            <a href="#contact" className='scroll__down'>Hubungi Saya</a>

*/

export default Header