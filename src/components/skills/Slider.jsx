import React from "react"

const Slider = (props) => {
    return (
        <input 
            value={props.percentation}
            type="range" 
            max={100} 
            readOnly
        />
    )
}

export default Slider