// @flow
import React from 'react';
import { validate } from '../tools/type_validations';
import type {TableItem} from '../tools/types';

var style_cursor = {
    cursor:"pointer"
}

type Props = {
    itens_body?: Array<TableItem>,
    itens_header?: Array<TableItem>,
    itens_footer?: Array<TableItem>,
    definition?: string,
    onClickRow?: ()=> void,
    header_definition?: string
}

const props_obj = {
    itens_body:"array",
    itens_header: "array",
    itens_footer: "array",
    definition: "string",
    onClickRow: "function",
    header_definition: "string"
}

const Table = (props: Props) => {
    validate(props,props_obj,"Table");
    return assembleTable(props);
}

function assembleTable(props) {
   var definition = (props.definition ==  undefined)? "table": "table " + props.definition;
    
    var code =  <table className={definition}> 
                {isArrayOk(props.itens_header) && assembleHeader(props)}
                {isArrayOk(props.itens_body) && assembleBody(props.itens_body,props.onClickRow)}
                {isArrayOk(props.itens_footer) && assembleFooter(props.itens_footer)}
            </table>

    return code;
}

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
    var header_definition = props.header_definition;
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


export default Table;
