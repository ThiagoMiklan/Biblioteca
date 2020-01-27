import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import button_props from '../props/ButtonProps';


class Button extends React.Component {

    render() {
        return (
            <button
                className={classnames(getClassNames(this.props))}>
                {this.props.button_name}
         </button>);
    }
}

function getClassNames(props){
    var definition  = props.definition;
    var array_definition = definition.split(" ");
    var size = array_definition.length;
    var classObj = new Object();
    
    for(let i = 0 ; i < size ;i++){
        let key =  (button_props[array_definition[i]]);
        let value = (button_props[array_definition[i]]);
        classObj[key] = value;
    }
    
    return classObj;
}


Button.propTypes = {
    button_name: PropTypes.string,
    definition: PropTypes.string,
    onClick: PropTypes.func
};


export default Button;