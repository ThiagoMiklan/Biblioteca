// @flow
import * as React from 'react'
import {validate} from '../tools/type_validations.js'

type Props ={
    definition?:string,
    children?: React.Node
}

const props_obj = {
    definition: 'string'
}

const Control = (props:Props)=>{
    validate(props,props_obj,"Control");
    var definition = (props.definition ==  undefined || props.definition == '') ? "control": "control "+props.definition
    
    return(
        <div className={definition}>
              {
                    React.Children.map(props.children, (child, i) => {
                        return child
                    })
                }
        </div>
    );
}

export default Control;
