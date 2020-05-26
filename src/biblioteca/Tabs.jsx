// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

type Props = {
    definition?:string,
    itens?: Array<Object>
}

const Tabs = (props:Props)=>{
    var definition = (props.definition == undefined)? "tabs": "tabs "+ props.definition;
    return (<div className={definition}>
            {assembleListTabs(props.itens)}
            </div>
  );
}

function assembleListTabs(itens){
     var tabs_code = "";
    
        if(Array.isArray(itens)){
        tabs_code = 
            <ul>
                {itens.map(item => 
                <li onClick={item["onClick"]} className={item["definition"]}>
                    <a>
                    {item["icon_name"] != undefined && <Icon definition={item["icon_definition"]} icon_name={item["icon_name"] }></Icon>}
                    {item["value"]}
                    </a>
                </li>)}
            </ul>
        }
        
        return tabs_code;  
}

Tabs.propTypes = {
    definition: PropTypes.string,
    itens: PropTypes.array
}

export default Tabs;