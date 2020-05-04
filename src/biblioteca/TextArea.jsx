// @flow
import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Control from './Control';
import checkerDefinition from '../tools/checker.js';

type Props = {
    definition?:string,
    loading?: bool,
    onChange?: ()=>void,
    placeholder?: ()=> void,
    rows?: ()=> number,
    readonly? : bool,
    disabled?:bool
}

const TextArea = (props:Props)=>{
     return assembleTextArea(props);
}

function assembleTextArea(props){
    checkerDefinition(props.definition,"Text");
    var definition_text = (props.definition ==  undefined)? "": props.definition;
    var definition =  classnames(getClassName("textarea "+ definition_text,"Text"));
    var definitionControl = props.loading == true ? "loading": "";
    
    return <Control definition={definitionControl}>
                <textarea 
                onChange={props.onChange}
                className={definition} 
                placeholder={props.placeholder}
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
    readonly: PropTypes.bools,
    onChange: PropTypes.func
}

export default TextArea;