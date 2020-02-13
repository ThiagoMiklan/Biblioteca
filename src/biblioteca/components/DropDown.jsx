import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import Button from '../elements/Button.jsx';
import { renderToString } from 'react-dom/server';

class DropDown extends React.Component {

    render() {
      /*
      Sério problema ao exibir um dropdown, caso o nome do primeiro não seja um nome muito extenso
      corre o risco dos itens do dropdown não serem exibidos, necessário checagem completa do problema
      para evitar bugs no componente
      !! Problema identificado ao utilizar right(is-right), no caso de erro usado is-active e is-right
      
      Não existe
      */
        var definition = "dropdown " + classname(getClassName(this.props.definition, "DropDown"));
        var dropdown_name = this.props.dropdown_name;
        var code = "";
        return (
          <div class={definition}>
                <div class="dropdown-trigger">
                    {this.props.button_dropdown}
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                        {assemble(this.props.itens)}
                    </div>
                </div>
             </div>
             

        );

       
    }

}

function assemble(itens) {
  return itens.map(item => decideTypeOfItens(item));
}

function decideTypeOfItens(item) {
    // link é o default
    var item_code = "";
    if (item["link"] == true) {
        item_code = assembleItensLinks(item)
    } else {
        item_code =  assembleComponentsItens(item)
    }
    var code = renderToString(item_code);
    return item_code;
}

function assembleItensLinks(item) {
    var definition = classname(getClassName("dropdown-item "+item["definition"], "DropDown"));
    return <a className={definition} href={item["href"]}>{item["value"]}</a>;
}

function assembleComponentsItens(item) {
    var definition = classname(getClassName("dropdown-item "+item["definition"],"DropDown"));
    return <div className="dropdown-item">{item["value"]}</div>;
}

DropDown.propTypes = {
    definition: PropTypes.string,
    dropdown_name: PropTypes.string,
    itens: PropTypes.array,
    button_dropdown: PropTypes.element
}

export default DropDown;