// @flow
import * as React from 'react';
import {validate} from '../tools/type_validations.js';

type Props ={
    definition?: string,
    children?:React.Node,
    custom?: Object 
}

const props_obj ={
    definition: "string",
    custom: 'object'
}

const ButtonList = (props:Props) => {
    validate(props,props_obj,"ButtonList")
return assembleButtonList(props);
}

function assembleButtonList(props) {
    validate(props,props_obj,"ButtonList");
    var code_icon = "";
    var definition = (props.definition ==  undefined)? "buttons": "buttons "+props.definition;
    
        if (definition.includes("addons")) {
        code_icon =
            <div className={props.definition} {...props.custom}>
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

export default ButtonList;