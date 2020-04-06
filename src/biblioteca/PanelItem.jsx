import React from 'react'

const PanelItem = (props) => {
    return <div className="panel-block">
       {props.children}
    </div>
}

export default PanelItem;