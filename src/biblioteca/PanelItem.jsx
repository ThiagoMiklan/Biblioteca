import React from 'react'

const PanelItem = (props) => {
    return <div className="panel-block" onClick={props.onClick}>
       {props.children}
    </div>
}

export default PanelItem;