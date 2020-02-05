import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import { renderToString } from 'react-dom/server';

class NavigationBar extends React.Component {



    render() {
       // var startItens = getStartItens(this.props.itens);
        //var endItens  =  getEndItens(this.props.itens);
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
// Método passado para função filter da propriedade itens para que filter os itens que irão no start da barra
function filterStartItens(item) {
    var start_condition = (item["start"] == true && (item["end"] == false || item["end"] == undefined)) ;
    // default condition para casa não seja informado nem start e nem end, acontecendo isso é inserido no start
    var default_condition = (item["start"] == undefined || item["end"] == undefined);

    return start_condition || default_condition; 
}

//Método passado para função filter da propriedade itens para que filter os itens que irão no start da barra
function filterEndItens(item) {
    return item["end"] == true && (item["start"] == false || item["start"] == undefined);
}

function getStartItens(itens) {
    return itens.filter(filterStartItens);
}

function getEndItens(itens) {
    return itens.filter(filterEndItens);
}

function assemble(itens) {
    var itens_code = "";
    
    if (Array.isArray(itens)) {
        // no caso é necessário adicionar primeiro um item para que o dropdown possa funcionar
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

    var itens_code =
        <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
                More
            </a>
            <div className="navbar-dropdown">
                {itens.map(item => assembleItem(item, ""))}
        </div>
        </div>;
    return itens_code;

}

function assembleItem(item, definition) {
    var className = "navbar-item " + classname(getClassName(definition, "NavigationBar"));
    var item_code = <a className={className}>{item["value"]}</a>;
    
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

