import React from "react"
import ReactCountryFlag from "react-country-flag"
import Slider from './Slider'

const Language = () => {
    const skills = [
        {
            logo: <ReactCountryFlag countryCode="US" svg/>,
            percent: 76,
            color: "red"
        },
        {
            logo: <ReactCountryFlag countryCode="IL" svg/>,
            percent: 65,
            color: "red"
        },
        {
            logo: <ReactCountryFlag countryCode="JP" svg/>,
            percent: 68,
            color: "red"
        },
        {
            logo: <ReactCountryFlag countryCode="AE" svg/>,
            percent: 32,
            color: "red"
        },
        {
            logo: <ReactCountryFlag countryCode="FR" svg/>,
            percent: 23,
            color: "red"
        },
    ]

    return (
        <div className="skill__card">
            <h5>Language</h5>
            
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

export default Language