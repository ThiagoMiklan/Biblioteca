import React from 'react'

const PanelItem = (props) => {
    return <a className="panel-block">
       {props.children}
    </a>
}

export default PanelItem;