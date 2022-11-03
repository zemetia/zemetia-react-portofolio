import React from 'react'
import './about.css'
import Profile from '../../assets/image/foto.png'
import CTA from './CTA'
import { FaAward } from 'react-icons/fa'
import { Fade, Slide } from 'react-awesome-reveal'
import { CgWebsite } from 'react-icons/cg'

const About = () => {
    const data = {
        simpleBio: "I'm Yoel Mountanus Sitorus, an Informatics Engineering Student from the Sepuluh Nopember Institute of Technology, Surabaya. has a field of interest in Fullstack Web Developer, Data Scientist, and Quantum Computing.",
        cvLink: "http://project.zymerweb.rf.gd/resume/yoel_resume.pdf",
        githubLink: "https://github.com/zemetia?tab=repositories"
    }

    return (
        <section id='about'>
            
            <div className="section__title">
                <h2 className='gradient-text'>About me</h2>
                <h5>Hey let's get acquainted</h5>
            </div>
            

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-card"></div>
                    <div className="about__me-image">
                        <Slide delay={360}>
                            <img src={Profile} alt="About" />
                        </Slide>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <Fade cascade>
                            <article className="about__card">
                                <CgWebsite className='about__icon' />
                                <h5>Project</h5>
                                <small>4</small>
                            </article>
                            <article className="about__card">
                                <FaAward className='about__icon' />
                                <h5>Experience</h5>
                                <small>1</small>
                            </article>
                            <article className="about__card">
                                <FaAward className='about__icon' />
                                <h5>Major</h5>
                                <small>Informatics</small>
                            </article>
                        </Fade>
                    </div>
                    <br />
                    <Fade delay={360}>
                        <p>
                            {data.simpleBio}
                        </p>
                    </Fade>
                    
                    <CTA />
                </div>
            </div>
        </section>
    )
}

export default About