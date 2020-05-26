// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    onChange?: ()=> void,
    max?: number,
    value?: number,
    definition?:string
}

const ProgressBar = (props: Props)=>{
  
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