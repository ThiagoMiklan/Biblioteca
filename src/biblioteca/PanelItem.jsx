// @flow
import * as React from 'react'

type Props = {
    onClick?: ()=> void,
    children?: React.Node
}

const PanelItem = (props:Props) => {
    return <div className="panel-block" onClick={props.onClick}>
       {props.children}
    </div>
}

export default PanelItem;