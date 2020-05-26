// @flow
import React from 'react'
import PropTypes from 'prop-types';
import Control from './Control';

type Props = {
    definition?:string,
    loading?: bool,
    onChange?: ()=>void,
    placeholder?: ()=> void,
    rows?: ()=> number,
    readonly? : bool,
    disabled?:bool,
    label?: string,
    value?:string
}

const TextArea = (props:Props)=>{
     return assembleTextArea(props);
}

function assembleTextArea(props){
    var definition = (props.definition ==  undefined)? "textarea": "textarea "+ props.definition;
    
    var definitionControl = props.loading == true ? "is-loading": "";
    
    return <Control definition={definitionControl}>
			<label className="label"> {props.label}</label>
                <textarea 
				onChange={props.onChange}
                className={definition} 
                placeholder={props.placeholder}
                 rows={props.rows} 
                 readOnly={props.readonly}
                 disabled={props.disabled}
				 value={props.value}
                 ></textarea>
            </Control>
}

TextArea.propTypes ={
    definition: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bools,
    onChange: PropTypes.func,
	label: PropTypes.string,
	value: PropTypes.string
}

export default TextArea;