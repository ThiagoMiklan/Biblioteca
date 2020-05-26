// @flow
import React from 'react';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import PropTypes from 'prop-types';
import checkerDefinition from '../tools/checker.js';




// style cursor default pointer
// cursor ao passar com o mouse em cima de uma linha da table
var style_cursor = {
    cursor:"pointer"
}

type Props = {
    itens_body?: Array<Object>,
    itens_header?: Array<Object>,
    itens_footer?: Array<Object>,
    definition?: string,
    onClickRow?: ()=> void,
    header_definition?: string
}

const Table = (props: Props) => {
    checkerDefinition(props.definition,"Table");
    return assembleTable(props);
}

function assembleTable(props) {
    var table_definition = (props.definition ==  undefined)? "": props.definition;
    var definition = classnames(getClassName("table " + table_definition, "Table"));
    var code = <></>;

    
    code =  <table className={definition}>
                {isArrayOk(props.itens_header) && assembleHeader(props)}
                {isArrayOk(props.itens_body) && assembleBody(props.itens_body,props.onClickRow)}
                {isArrayOk(props.itens_footer) && assembleFooter(props.itens_footer)}
            </table>

    return code;
}

// verifica se é viável utilizar o array
function isArrayOk(array) {
    var output = false;

    if (Array.isArray(array) && array != undefined) {
        if (array.length > 0) {
            output = true;
        }
    }
    return output;
}

function assembleHeader(props) {
    var code_header = <></>
    var header_definition = classnames(getClassName(props.header_definition,"Table"));
    if(props.itens_header != undefined){
        code_header = <thead className={header_definition}>
        <tr>
            {props.itens_header.map(item_header => assembleRowHeaderFooter(item_header))}
        </tr>
    </thead>
    }
    return code_header;
}

function assembleFooter(itens_footer) {
    var code_footer = <></>
    if(itens_footer != undefined){
        code_footer = <tfoot>
        <tr>
            {itens_footer.map(item_footer => assembleRowHeaderFooter(item_footer))}
        </tr>
    </tfoot>
    }
    return code_footer;
}

function assembleBody(itens,onClickRow) {
    var code = <></>;
    
    var getRow = (item) => {
        var row = "";
        var values:Array<Object> = Object.values(item);
        row = values.map(value => <td>{value}</td>)
        return row;
    }
    if(itens != undefined){
         code = <tbody>
                {itens.map(item => <tr key={item["key"]} style={style_cursor}  onClick={onClickRow}>{getRow(item)}</tr>)}
            </tbody>
    }
   return code;
}

function assembleRowHeaderFooter(item) {
    return <th>{item["value"]}</th>

}

Table.propTypes = {
    itens_body: PropTypes.array,
    itens_header: PropTypes.array,
    itens_footer: PropTypes.array,
    // função para quando clicar na tabela
    // executar alguma ação
    // evento global para todas as linhas
    onClickRow: PropTypes.func,
    header_definition: PropTypes.string
}


export default Table;
