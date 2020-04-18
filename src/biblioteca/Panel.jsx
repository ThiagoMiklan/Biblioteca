import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Icon from './Icon';
import PanelItem from './PanelItem';
import Field from './Field';


// v.01
const Panel = (props) => {
    var definition =  "panel "+ classnames(getClassName(props.definition,"Panel"));
    return (
        <nav class={definition}>
            {assembleHeading(props.header)}
            {haveSearch(props) == true &&  assembleSearch(props)}
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
    return <PanelItem onClick={item["onClick"]}>
            {(item["icon_name"] != undefined && item["icon_name"] != '') && 
             <Icon icon_name={item["icon_name"]} definition={item["icon_definition"]}></Icon>
            }
            {item["value"]}
            </PanelItem>
} 

function assembleSearch(props){
    return <Field input_definition={props.search_definition}
                  icon_name={"fas fa-search"}
                  control_definition="icons-left"
                  placeholder={props.search_placeholder}
                  icon_definition={props.search_icon_definition}
                  onChange={props.onChangeSearch}
                  type="text"
            />
}

function haveSearch(props){
    return props.search_definition != undefined ||
           props.search_placeholder != undefined ||
           props.search_icon_definition != undefined
}


Panel.propTypes = {
    definition: PropTypes.string,
    header: PropTypes.string,
    itens_tabs: PropTypes.array,
    itens_blocks: PropTypes.array,
    onChangeSearch: PropTypes.func,
    search_definition: PropTypes.string,
    search_placeholder: PropTypes.string,
    search_icon_definition: PropTypes.string
}

export default Panel;