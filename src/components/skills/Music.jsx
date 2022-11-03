import React from "react"
import { GiGuitar, GiGuitarBassHead, GiPianoKeys, GiDrumKit, GiViolin } from 'react-icons/gi'
import { FaGuitar } from 'react-icons/fa'
import Slider from './Slider'

const Music = () => {
    const skills = [
        {
            logo: <FaGuitar />,
            percent: 80,
            color: "red"
        },
        {
            logo: <GiGuitar />,
            percent: 88,
            color: "red"
        },
        {
            logo: <GiGuitarBassHead />,
            percent: 85,
            color: "red"
        },
        {
            logo: <GiPianoKeys />,
            percent: 80,
            color: "red"
        },
        {
            logo: <GiDrumKit />,
            percent: 40,
            color: "red"
        },
        {
            logo: <GiViolin />,
            percent: 60,
            color: "red"
        },
        
    ]

    return (
        <div className="skill__card">
            <h5>Music</h5>
            
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

export default Music