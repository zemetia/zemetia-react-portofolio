import React from "react"
import { GrReactjs } from 'react-icons/gr'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss, SiCss3, SiBootstrap } from 'react-icons/si'
import Slider from './Slider'

const Frontend = () => {
    const skills = [
        {
            logo: <AiOutlineHtml5 />,
            percent: 92,
            color: "red"
        },
        {
            logo: <GrReactjs />,
            percent: 53,
            color: "red"
        },
        {
            logo: <TbBrandNextjs />,
            percent: 40,
            color: "red"
        },
        {
            logo: <SiTailwindcss />,
            percent: 60,
            color: "red"
        },
        {
            logo: <SiCss3 />,
            percent: 80,
            color: "red"
        },
        {
            logo: <SiBootstrap />,
            percent: 85,
            color: "red"
        },
        
    ]

    return (
        <div className="skill__card">
            <h5>Front End</h5>
            
            <div className="skill__bar">

                {skills.map((val, index) => {
                    return (
                        <div key={index} className="skill__section">
                            {val.logo}
                            <Slider percentation={val.percent} />
                        </div>
                    )
                })}

            </div>
            
        </div>
    )
}

export default Frontend