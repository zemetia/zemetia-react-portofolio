import React from "react"

const School = (props) => {
    return (
        <div className="school__part">
            <div className="school__image">
                <img src={props.data.imageLink} alt="School" />
            </div>
            <div className="school__data">
                <div className="school__name">
                    <h2>{props.data.name}</h2>
                    <div className="school__details">
                        <h5>{props.data.location}</h5>
                        <h5 style={{textAlign: "right"}}>{props.data.since}</h5>
                    </div>
                </div>
                

                <p> {props.data.desc} </p>
                <a href={props.data.schoolLink} target="_blank" className="btn btn-school">Go to school web</a>

            </div>
            
        </div>
    )
}

export default School