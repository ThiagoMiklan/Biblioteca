// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName'
import checkerDefinition from '../tools/checker.js';


type Props = {
    onChange?: ()=> void,
    max?: number,
    value?: number,
    definition?:string
}

const ProgressBar = (props: Props)=>{
    checkerDefinition(props.definition,"ProgressBar");
    var definition =  (props.definition == undefined)? "": props.definition;
        return (
            <progress onChange={props.onChange} className={classnames(getClassName("progress "+ definition,"ProgressBar"))}
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