import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Control from './Control';

const TextArea = (props)=>{
     return assembleTextArea(props);
}

function assembleTextArea(props){
    var definition =  classnames(getClassName("textarea "+ props.definition,"Text"));
    var definitionControl = props.loading == true ? "loading": "";
    
    return <Control definition={definitionControl}>
                <textarea className={definition} placeholder={props.placeholder}
                 rows={props.rows} 
                 readOnly={props.readonly}
                 disabled={props.disabled}
                 ></textarea>
            </Control>
}

TextArea.propTypes ={
    definition: PropTypes.string,
    placeholder: PropTypes.string,
    rows: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bools   
}

export default TextArea;