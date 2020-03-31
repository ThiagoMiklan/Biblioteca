import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName';
import { renderToString } from 'react-dom/server';


// v.01
const Panel = (props) => {
    var definition =  "panel "+ classnames(getClassName(props.definition,"Panel"));
    return (
        <nav class={definition}>
            {assembleHeading(props.header)}
            {assemblePanelTabs(props.itens_tabs)}
            {props.children}
        </nav>
    );
}

function assembleHeading(header) {
    return <p class="panel-heading">{header}</p>
}

function assemblePanelTabs(itens) {
    if (itens != undefined && Array.isArray(itens)) {
        return <p className="panel-tabs">
            {itens.map(item => assembleLink(item))}
        </p>
    } else {
        return <></>
    }

}
function assembleLink(item) {
    return <a>{item["value"]}</a>
}



Panel.propTypes = {
    header: PropTypes.string,
    itens_tabs: PropTypes.array,
    itens_blocks: PropTypes.array
}

export default Panel;