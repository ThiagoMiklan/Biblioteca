import React from 'react'

// Provisório
const Icon = (props) => {
    return (
        <span class={props.definition}>
            <i class={props.icon}></i>
        </span>
    );
}

export default Icon;