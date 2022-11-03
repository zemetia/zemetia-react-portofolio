import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Language from './Language'
import Music from './Music'
import { Fade } from 'react-awesome-reveal'

const Skills = () => {
    return (
        <section id='skills'>

            <div className="section__title">
                <h2 className='gradient-text'>Skills</h2>
            </div>
            
            
            <div className="container skill__container">
                <Fade cascade>
                    <Frontend />
                    <Backend />
                    <Language />
                    <Music />
                </Fade>
            </div>
        </section>
    )
}

export default Skills