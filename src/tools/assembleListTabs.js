import React from 'react';
import Icon from '../biblioteca/Icon';
import classnames from 'classnames';
import getClassName from './getClassName'
import {renderToString} from 'react-dom/server';
// Função criada para reaproveitar o método assembleList do componente Tabs
// Pode-se usá-lo por exemplo, dentro do componente Panel para montar um Panel Tabs;
function assembleListTabs(itens){
    var tabs_code = "";
    
        if(Array.isArray(itens)){
        tabs_code = 
            <ul>
                {itens.map(item => 
                <li onClick={item["onClick"]} className={classnames(getClassName(item["definition"],"Tabs"))}>
                    <a>
                    {item["icon_name"] != undefined && <Icon definition={item["icon_definition"]} icon_name={item["icon_name"] }></Icon>}
                    {item["value"]}
                    </a>
                </li>)}
            </ul>
        }

        var x =  renderToString(tabs_code);
        var y = 0;
    
         return tabs_code;   
}

export default assembleListTabs;