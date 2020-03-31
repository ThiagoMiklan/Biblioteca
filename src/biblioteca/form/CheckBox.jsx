import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName';

const CheckBox = (props)=>{
    return <label className="checkbox" disabled={props.disabled}>
                <input type="checkbox" onClick={props.onClick} disabled={props.disabled}/>
                {props.children}
            </label>
}

CheckBox.propTypes ={
    disabled: PropTypes.bool
}

export default CheckBox;