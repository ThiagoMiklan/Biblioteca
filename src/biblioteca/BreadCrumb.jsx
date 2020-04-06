import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../tools/getClassName';
 ;


class BreadCrumb extends React.Component{

    render(){
        var definition = "breadcrumb "+ classname(getClassName(this.props.definition,"BreadCrumb"));
        return (
        <nav className = {definition}>
        <ul>
         {assemble(this.props.itens)}
        </ul>
      </nav>);
    }

}
function assemble(item){
   var itens_code = "";
    if(Array.isArray(item)){
        itens_code =  assembleItens(item);
    }else if(typeof item =='object'){
        itens_code = assembleSingleItem(item);
    }
    return itens_code;
}

function assembleItens(itens){
    var itens_code = itens.map(item => assembleSingleItem(item));
    return itens_code;
}

function assembleSingleItem(item){
return (
    <li><a 
    className ={classname(getClassName(item["definition"],"BreadCrumb"))}
    href={item["link"]}>
    {item["value"]}
    </a></li>);
}

export default BreadCrumb;