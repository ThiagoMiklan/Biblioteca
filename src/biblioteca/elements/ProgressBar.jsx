import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName'


class ProgressBar extends React.Component{


    render(){

        return (
            <progress className={classnames(getClassName(this.props,"ProgressBar"))}
             max={this.props.max} 
             value ={this.props.value}>  
            
            </progress>
        );

    }



}

ProgressBar.propTypes = {
    definition: PropTypes.string,
    max: PropTypes.string,
    value: PropTypes.string,

}

export default ProgressBar;