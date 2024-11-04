import React from "react";
import './card.css'

const Card = ({color, text}) => {
    return (
        <div className="card">
            <p style={{color: color}}>{text.toUpperCase()}</p>
        </div>
    );
}

export default Card;