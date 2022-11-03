import React from "react"
import Slider from './Slider'
import { FaLaravel } from 'react-icons/fa'
import { DiDjango } from 'react-icons/di'
import { SiNestjs, SiExpress, SiDart } from 'react-icons/si'

const Backend = () => {
    const skills = [
        {
            logo: <FaLaravel />,
            percent: 78,
            color: "red"
        },
        {
            logo: <SiNestjs />,
            percent: 54,
            color: "red"
        },
        {
            logo: <SiExpress />,
            percent: 70,
            color: "red"
        },
        {
            logo: <SiDart />,
            percent: 35,
            color: "red"
        },
        {
            logo: <DiDjango />,
            percent: 35,
            color: "red"
        },
    ]

    return (
        <div className="skill__card">
            <h5>Back End</h5>
            
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

export default Backend