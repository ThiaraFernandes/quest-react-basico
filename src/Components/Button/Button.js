import React from "react";
import './button.css';

const Button = (props) => {
    return (
        <div >
            <button
                className="button"
                onClick={props.onClick}
                style={{ color: props.fontColor }}
            >{props.label}
            </button>
        </div>
    );
}

export default Button;