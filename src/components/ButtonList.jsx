// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import {validate} from '../tools/type_validations.js';

type Props ={
    definition?: string,
    field?: bool,
    children?:React.Node
}

const props_obj ={
    definition: "string",
    field: "boolean"
}

const ButtonList = (props:Props) => {
    validate(props,props_obj)
return assembleButtonList(props);
}


function assembleButtonList(props) {
    var code_icon = "";
    var definition = (props.definition ==  undefined)? "buttons": "buttons "+props.definition;
    
        if (definition.includes("addons")) {
        code_icon =
            <div className={props.definition}>
                {
                    React.Children.map(props.children, (child, i) => {
                        return <p className="control">
                            <div className={definition}>
                                {child}
                            </div>
                        </p>
                    })
                }
             </div>

    } else {
        code_icon =
            <div className={definition}>
                {props.children}
            </div>;
    }

    
    
    return code_icon;
}

ButtonList.propTypes = {
    definition: PropTypes.string,
    field: PropTypes.bool
};

export default ButtonList;