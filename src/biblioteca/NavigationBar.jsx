// @flow
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import checkerDefinition from '../tools/checker.js';
/*
Existem algumas maneira de fornecer os itens de "start" e "end" ao usar o presente componente 
1 - Fornecer através da props itens_start ou itens_end um objeto contendo um atributo "value"
2 - Fornecer um array de objetos contendo em cada objeto o atributo value
3 - Fornecer um array de objetos com um dropdown, nesse caso o um array de objetos dentro do array em que está contido
4 - É possível fornecer componentes diversos, como Botões no start ou end da barra, para tal faz-se necessário
    informar o código do elemento.
    Exemplo:

    var itens_end = [{value: <Button>Login</Button>}, {value: <Button>Log Out</Button>}] 

    <NavigationBar
            itens_end={itens_start_3}
        />
*/
type Props = {
    definition?:string,
    link_brand?:string,
    src_brand?:string,
    width_brand?:string,
    alt?:string,
    height_brand?:string,
    itens_start?:Array<Object>,
    itens_end?:Array<Object>
}

const NavigationBar = (props:Props)=>{
    checkerDefinition(props.definition,"NavigationBar");
    var definition="navbar " + classnames(getClassName(props.definition,"NavigationBar"));
        return (
            <nav className={definition}>
                
                <div className="navbar-brand">
                    <a className="navbar-item" href={props.link_brand}>
                        <img src={props.src_brand} alt={props.alt} width={props.width_brand} height={props.height_brand}></img>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        {assemble(props.itens_start)}
                    </div>
                    <div className="navbar-end">
                        {assemble(props.itens_end)}
                    </div>
                </div>
            </nav>

        );
    
}

function assemble(itens) {
    var itens_code = "";
    // verifica se array
    if (Array.isArray(itens)) {
        // elimina vazio
        if(itens.length > 0){
            // se não estiver vazio monta uma lista de itens
            itens_code = assembleItens(itens);
        }
    } else  if(typeof itens =='object'  && itens != undefined){
        //se não for array, não for undefined e for objeto realiza operação
        itens_code = assembleItem(itens, itens["definition"]);
    }
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

// default : hoverable
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

    

    return itens_code;
}

function assembleFirstItemDropDown(item) {
    var first_item = "";
    if (item != undefined) {
        first_item = <a className="navbar-link">
            {item["value"]}
        </a>
    }

   
    return first_item;
}

function assembleItem(item, definition) {
    var className = "navbar-item "+ classnames(getClassName(item["definition"], "NavigationBar"));
    var x = item["value"];
    var item_code = <a onClick={item["onClick"]} className={className}>{item["value"]}</a>;
  
    return item_code;
}

NavigationBar.propTypes = {
    src_brand: PropTypes.string,
    link_brand: PropTypes.string,
    width_brand: PropTypes.number,
    height_brand: PropTypes.number,
    alt_brand: PropTypes.string,
    itens_start : PropTypes.array,
    itens_end : PropTypes.array,
    definition: PropTypes.string
}

export default NavigationBar;

