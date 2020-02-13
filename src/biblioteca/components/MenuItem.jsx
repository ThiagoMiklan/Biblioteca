import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import Button from '../elements/Button.jsx';
import { renderToString } from 'react-dom/server';

class MenuItem extends React.Component{

    render(){
        return(
          <div>
            {assembleItem(this.props.item, this.props.sub_itens)}
          </div>);
    }
}


function assembleItem(item,sub_itens){
    if(sub_itens != undefined && Array.isArray(sub_itens)){
        assembleItemWithSubList(item,sub_itens);
    }else{

    }
}
function assembleItemWhitoutSubItem(item){
   return <li><a>{item}</a></li>;
}

function assembleItemWithSubList(item,sub_itens){
    
    return (<li>
        <a> {item}</a>
        <ul>
            {sub_itens.map(item=> assembleItemWhitoutSubItem(item))}
        </ul>
    </li>);

    
}


export default MenuItem;