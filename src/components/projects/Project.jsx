import React from "react"
import { GiOpenBook } from 'react-icons/gi'

const Project = (props) => {
    return (
        <div className="project">
            <img src={props.data.imageLink} alt="Project" />
            <div className="project__detail">
                <div className="header">
                    <h2>{props.data.title}</h2>
                    <div style={{color: "white", fontSize:"1.5rem"}}>
                        <a href={props.data.projectLink} target="_blank" rel="noreferrer"><GiOpenBook /></a>
                    </div>
                </div>
                <div className="footer">
                    <h5>{props.data.desc}</h5>
                </div>
            </div>
        </div>
    )
}

export default Project