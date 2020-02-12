import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import getClassName from '../../tools/getClassName';
import Button from '../elements/Button.jsx';
import { renderToString } from 'react-dom/server';

class DropDown extends React.Component {

    render() {
        var definition = "dropdown " + classname(getClassName(this.props.definition, "DropDown"));
        var dropdown_name = this.props.dropdown_name;
        var code = "";
        return (
          <div class={definition}>
                <div class="dropdown-trigger">
                    <Button definition="button primary" value={dropdown_name} />
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
    itens: PropTypes.array
}

export default DropDown;