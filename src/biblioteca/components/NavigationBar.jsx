import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import { renderToString } from 'react-dom/server';

class NavigationBar extends React.Component {



    render() {
     
        return (
            <nav class="navbar">
                <div class="navbar-brand">
                    <a class="navbar-item" href={this.props.link_brand}>
                        <img src={this.props.src_brand} alt={this.props.alt} width={this.props.width_brand} height={this.props.height_brand}></img>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        {assemble(this.props.itens_start)}
                    </div>
                    <div className="navbar-end">
                        {assemble(this.props.itens_end)}
                    </div>
                </div>
            </nav>

        );
    }

}

function assemble(itens) {
    var itens_code = "";
    
    if (Array.isArray(itens)) {
       // elimina um array vazio
        if(itens.length > 0){
            itens_code = assembleItens(itens);
        }
    } else {
        itens_code = assembleItem(itens, itens["definition"]);
    }

    var itens_code_string = renderToString(itens_code);
    return itens_code;
}

function assembleItens(itens) {
    let size = itens.length;
    var itens_code  = itens.map(item => decideTypeOfItem(item));
    return itens_code;
}

function decideTypeOfItem(item){
    var itens_code ="";
     // se um item for um array (array dentro do array), então ele é um dropdown
    if(Array.isArray(item)){
        itens_code = assembleItensDropDown(item);
    }else{
    // se não ele conjunto de itens encadeados
        itens_code = assembleItem(item, "");
    }
    return itens_code;
}

function assembleItensDropDown(itens){
    var firstitemDropDown = assembleFirstItemDropDown(itens[0]);
   
    if(itens.length > 0){
        itens.splice(0,1);
    }
    var itens_code =
    <div className="navbar-item has-dropdown is-hoverable">
        {firstitemDropDown}
        <div className="navbar-dropdown">
            {itens.map(item => assembleItem(item, ""))}
        </div>
    </div>;

    var code = renderToString(itens_code);

    return itens_code;
}

function assembleFirstItemDropDown(item) {
    var first_item = "";
    if (item != undefined) {
        first_item = <a className="navbar-link">
            {item["value"]}
        </a>
    }

    var code = renderToString(first_item);
    return first_item;
}

function assembleItem(item, definition) {
    var className = "navbar-item "; //+ classname(getClassName(definition, "NavigationBar"));
    var x = item["value"];
    var item_code = <a className={className}>{item["value"]}</a>;
    //var code = renderToString(item_code);
    return item_code;
}

NavigationBar.propTypes = {
    src_brand: PropTypes.string,
    link_brand: PropTypes.string,
    width_brand: PropTypes.number,
    height_brand: PropTypes.number,
    alt_brand: PropTypes.string,
    itens_start : PropTypes.array,
    itens_end : PropTypes.array
}

export default NavigationBar;

