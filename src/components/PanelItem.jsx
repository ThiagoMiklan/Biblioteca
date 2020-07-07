// @flow
import * as React from 'react'
import { validate } from '../tools/type_validations'

type Props = {
    onClick?: ()=> void,
    children?: React.Node
}
const props_obj ={
    onClick: "function"
}

const PanelItem = (props:Props) => {
    validate(props,props_obj,"PanelItem");
    return <div className="panel-block" onClick={props.onClick}>
       {props.children}
    </div>
}

export default PanelItem;