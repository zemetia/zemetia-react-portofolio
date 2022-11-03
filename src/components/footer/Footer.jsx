import React from 'react'
import './footer.css'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    const data= [
        {
            logo: <AiFillGithub />,
            link: "https://github.com/zemetia"
        },
        {
            logo: <AiFillLinkedin />,
            link: "https://linkedin.com/in/yoel-mountanus-sitorus"
        },
        {
            logo: <AiFillInstagram />,
            link: "https://instagram.com/za_zymer"
        },
        {
            logo: <AiFillYoutube />,
            link: "https://www.youtube.com/channel/UCcyZCTX_feNmByBpTlAogHQ"
        }
    ]

    return (
        <footer>
            <div className="footer">
                <div className="footer__social">
                    {data.map((val, index) => {
                        return (
                            <a key={index} href={val.link} target="_blank" rel="noreferrer">
                                {val.logo}
                            </a>
                        )
                    })}
                </div>

                <div className="footer__nav gradient-text">
                    <a href="#">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#portofolio">PORTOFOLIO</a>
                    <a href="#education">EDUCATION</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#contact">CONTACTS</a>
                </div>

                <div className="footer__copyright">
                    <a>CREATED BY YOEL MOUNTANUS SITORUS</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer