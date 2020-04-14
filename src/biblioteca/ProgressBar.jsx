import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName'


const ProgressBar = (props)=>{
        return (
            <progress onChange={props.onChange} className={classnames(getClassName("progress "+ props.definition,"ProgressBar"))}
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