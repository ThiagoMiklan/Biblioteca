// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {validate} from '../tools/type_validations';

type Props = {
    itens: Array<Object>,
    header?: bool,
    footer?: bool,
    definition?: string,
}

const props_obj = {
    itens: "array",
    header: "boolean",
    footer: "boolean",
    definition: "string",
}

const TableQuery = (props:Props)=>{
    return assembleTable(props);
}

function assembleTable(props){
    validate(props,props_obj);
    var definition = (props.definition ==  undefined)? "table": "table " + props.definition;
    var code = <></>;
    // elimina vazio e não array
    if(props.itens !=undefined && Array.isArray(props.itens)){
        if(props.itens.length > 0 ){
            code = <table className={definition}>
                    { props.header == true && assembleHeader(props.itens)}
                    {assembleBody(props.itens)}
                    {props.footer ==  true && assembleFooter(props.itens)}
                   
                </table>
        }
    }

    return code;
}

function assembleHeader(itens) {
    var code_header = <></>
    
    var itens_header = makeArray(itens);

    code_header = <thead>
            <tr>
                {itens_header.map(item_header => assembleRow(item_header))}
            </tr>
        </thead>
    
    return code_header;
}

function assembleFooter(itens) {
    var code_footer = <></>

    var itens_footer = makeArray(itens);
    
    code_footer = <tfoot>
            <tr>
                {itens_footer.map(item_footer => assembleRow(item_footer))}
            </tr>
        </tfoot>
    return code_footer;
}

function assembleBody(itens) {
    var code = <></>;
    var getRow = (item) => {
        var row = "";
        var values: Array<Object> = Object.values(item);
        row = values.map(value => <td>{value}</td>)
        return row;
    }
    code = <tbody>
            {itens.map(item => <tr>{getRow(item)}</tr>)}
    </tbody>
    
    return code;
}

function makeArray(itens){
    // intera sobre os itens da query e retira deles todos os atributos possíveis
    var allAttributes =  itens.map(obj => Object.keys(obj));
    // cria um set para possuir uma estrutura que mantenha a propriedade de singularidade
    var set = new Set();
    // intera sobre cada valor encontrado - Sendo uma estrutura de array de objetos
    allAttributes.forEach(element => {
        // intera sobre cada objeto pegando seus valores e adicionando ao set
        // que irá mantê-lo único
        element.map(item =>set.add(item));
    });
    
    return [...set];// converte o set em array novamente;
}

function assembleRow(item) {
    return <th>{item}</th>

}

TableQuery.propTypes ={
    itens: PropTypes.array,
    footer: PropTypes.bool,
    header: PropTypes.bool
}


export default TableQuery;
