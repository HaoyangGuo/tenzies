import React from "react";

export default function Die(props) {
    return (
        <div className={`die ${props.isHeld && "held"}`} onClick={() => props.holdSelf(props.id)}>
            {props.value}
        </div>
    )
}