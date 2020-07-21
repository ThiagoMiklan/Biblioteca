// @flow
import * as React from 'react';
import Icon from './Icon';
import { validate } from '../tools/type_validations';
import {TabItem} from '../tools/types';


type Props = {
    definition?:string,
    itens?: Array<TabItem> 
}

const props_obj = {
    definition:"string",
    itens: "array"
}

const Tabs = (props:Props)=>{
    validate(props,props_obj,"Tabs");

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


export default Tabs;