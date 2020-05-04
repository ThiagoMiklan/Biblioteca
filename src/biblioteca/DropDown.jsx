// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import Button from '../biblioteca/Button';
import Icon from '../biblioteca/Icon';
import checkerDefinition from '../tools/checker.js';



/**
 * 
 * Observações: 
 * - O primeiro item do DropDown é gerado através do primeiro item de itens(props.itens)
 * - Para que os itens sejam exibidos ao clicar no DropDown é necessário tratar a características
 *  active (que define is-active do Bulma) através do JavaScript, ao contrário do Hoverable que funciona
 * somente com o CSS
 * 
 * 
 */

 type Props = {
  definition?: string,
  itens?: React.Node,
  onClick?: ()=> void
 }

const DropDown = (props: Props) => {
    /*
      Sério problema ao exibir um dropdown, caso o nome do primeiro não seja um nome muito extenso
      corre o risco dos itens do dropdown não serem exibidos, necessário checagem completa do problema
      para evitar bugs no componente
      !! Problema identificado ao utilizar right(is-right), no caso de erro usado is-active e is-right
      
      Não existe
      */
    checkerDefinition(props.definition,"DropDown");
    var definition = "dropdown " + classnames(getClassName(props.definition, "DropDown"));

    return (<div className={definition}>
                <div class="dropdown-trigger">
                     {extractButton(props.itens,props.onClick)}
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                     <div class="dropdown-content">
                        {assemble(props.itens)}
                     </div>
                 </div>
             </div>
             );
}

// Monta um botão a partir do primeiro item da lista
function extractButton(itens,onClick) {
    var name = "";
    var icon_name = ""
    var icon_definition = "";

    // extrai o primeiro item da lista que foi informada como props
    if (itens != undefined && Array.isArray(itens)) {
        if(itens[0] != undefined){
            var item = itens[0];
            name = item["value"];
            icon_name = item["icon_name"];
        }
     }
    /**
     * Funcionamento da renderização condicional
     * Se o nome do icone não é indefinido ou vazio, é usado o icone default para o dropdown
     * Senão, signigica que foi informado um nome para o icone, então é usado o que foi passado
     */
    return <Button onClick={onClick} >
        {(icon_name != undefined && icon_name != '')
            ? <Icon icon_name={classnames(getClassName(icon_name, "DropDown"))} icon_right={true}>{name}</Icon>
            
            : <Icon icon_name={classnames(getClassName("default-icon", "DropDown"))} definition={icon_definition} icon_right={true} >{name}</Icon>
        }
    </Button>
}

function assemble(itens) {
    var code = <></>
    if (itens != undefined && Array.isArray(itens)) {
        code = itens.map(item => decideTypeOfItens(item));
    }

    return code;
}

function decideTypeOfItens(item) {
    var item_code = "";
    if (item["link"] == true) {
        item_code = assembleItensLinks(item)
    } else {
        item_code = assembleComponentsItens(item)
    }

    return item_code;
}

function assembleItensLinks(item) {
    var definition = classnames(getClassName("dropdown-item " + item["definition"], "DropDown"));
    return <a className={definition} onClick={item["onClick"]} href={item["href"]}>{item["value"]}</a>;
}

function assembleComponentsItens(item) {
    var definition = classnames(getClassName("dropdown-item " + item["definition"], "DropDown"));
    return <div className={definition} onClick={item["onClick"]} href={item["href"]} >{item["value"]}</div>;
}

DropDown.propTypes = {
    definition: PropTypes.string,
    itens: PropTypes.array,
    onClick: PropTypes.func
}

export default DropDown;