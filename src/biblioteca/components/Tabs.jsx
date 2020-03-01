import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';

const Tabs = (props)=>{
var definition = "tabs "+ classname(getClassName(props.definition,"Tabs"));

    return (<div className={definition}>
            {assemble(props.itens)}
            </div>
  );
}

function assemble(itens){
var tabs_code = "";

    if(Array.isArray(itens)){
    tabs_code = 
        <ul>
            {itens.map(item => <li className={classname(getClassName(item["definition"],"Tabs"))}><a>{item["value"]}</a></li>)}
        </ul>
    }

     return tabs_code;   
        
}

export default Tabs;