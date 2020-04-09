import React from 'react'
import PropTypes from 'prop-types';

/***
 * Componente para 
 */
const CheckBox = (props)=>{
    return <label className="checkbox" disabled={props.disabled}>
                <input type="checkbox"  onClick={props.onClick} disabled={props.disabled}/>
                {props.children}
            </label>
}

CheckBox.propTypes ={
    // Caso seja informado true, o check será desabilitado
    // Caso não seja informado (undefined) ou seja false, não será desabilitado
    // Default : undefined
    disabled: PropTypes.bool,
    // Evento disparado ao selecionar o check
    onClick: PropTypes.func
}

export default CheckBox;