import React from "react"
import { AiFillGithub } from 'react-icons/ai'

const CTA = (props) => {
    return (
        <div className="cta">
            <a href={props.cv} className="btn" target="_blank">Download CV</a>
            <a href="" target="_blank" className="btn"> Projects </a>
            <a href="#contact" className="btn btn-primary ">Let's Talk</a>
        </div>
    )
}

export default CTA