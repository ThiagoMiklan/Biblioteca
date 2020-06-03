// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import {validate} from '../tools/type_validations.js';


type Props = {
  disabled?: bool,
  delete?: bool,
  definition?: string,
  children?: React.Node,
  custom?: Object,
  onClick?: () => void
}

const props_obj ={
    disabled: 'boolean',
    delete: 'boolean',
    definition: 'string',
    custom: 'object',
    onClick: 'function'
}


const Button= (props: Props)=>{
    var definition = getDefinition(props);

    validate(props,props_obj);

    return <button 
                {...props.custom} 
                disabled = {props.disabled == true? true: false } 
                className={definition} 
                onClick={props.onClick}
                >
                {props.children}
         </button>
         ;
}

function getDefinition(props){
    var definition = "";

    if(props.delete ==  true){
        definition = "delete";
    }else{
        definition = (props.definition == undefined) ? "button" : "button "+ props.definition;
    }

    return definition;
}

Button.propTypes = {
 
};

export default Button;