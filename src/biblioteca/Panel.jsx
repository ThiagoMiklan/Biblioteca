import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Icon from './Icon';
import PanelItem from './PanelItem';


// v.01
const Panel = (props) => {
    var definition =  "panel "+ classnames(getClassName(props.definition,"Panel"));
    return (
        <nav class={definition}>
            {assembleHeading(props.header)}
            {assemblePanelTabs(props.itens_tabs)}
            {assemblePanelBlocks(props.itens_blocks)}
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
    return <a onClick={item["onClick"]}>{item["value"]}</a>
}

function assemblePanelBlocks(itens){
   var code = <></>;
   
   if(Array.isArray(itens) && itens != undefined){
        code = itens.map(item => assembleBlock(item));
    }
    return code;
}

function assembleBlock(item) {
    return <PanelItem>
            {(item["icon_name"] != undefined && item["icon_name"] != '') && 
             <Icon icon_name={item["icon_name"]} definition={item["icon_definition"]}></Icon>
            }
            {item["value"]}
            </PanelItem>
} 



Panel.propTypes = {
    definition: PropTypes.string,
    header: PropTypes.string,
    itens_tabs: PropTypes.array,
    itens_blocks: PropTypes.array
}

export default Panel;