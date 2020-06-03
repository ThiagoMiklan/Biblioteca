// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { validate } from '../tools/type_validations';

type Props = {
    onChange?: ()=> void,
    max?: number,
    value?: number,
    definition?:string
}

const props_obj = {
    onChange: "function",
    max: "number",
    value: "number",
    definition:"string"
}

const ProgressBar = (props: Props)=>{
    validate(props,props_obj);
    var definition =  (props.definition == undefined)? "progress": "progress "+ props.definition;
        return (
            <progress onChange={props.onChange} className={definition}
             max={props.max} 
             value ={props.value}>  
            </progress>
        );
}

ProgressBar.propTypes = {
    definition: PropTypes.string,
    max: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func

}

export default ProgressBar;