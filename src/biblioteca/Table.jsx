import React from 'react';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import PropTypes from 'prop-types';

// style cursor default pointer
// cursor ao passar com o mouse em cima de uma linha da table
var style_cursor = {
    cursor:"pointer"
}

const Table = (props) => {
    return assembleTable(props);
}

function assembleTable(props) {
    var definition = classnames(getClassName("table " + props.definition, "Table"));
    var code = <></>;

    
    code =  <table className={definition}>
                {isArrayOk(props.itens_header) && assembleHeader(props.itens_header)}
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

function assembleHeader(itens_header) {
    var code_header = <></>

    code_header = <thead>
        <tr>
            {itens_header.map(item_header => assembleRowHeaderFooter(item_header))}
        </tr>
    </thead>

    return code_header;
}

function assembleFooter(itens_footer) {
    var code_footer = <></>

    code_footer = <tfoot>
        <tr>
            {itens_footer.map(item_footer => assembleRowHeaderFooter(item_footer))}
        </tr>
    </tfoot>
    return code_footer;
}

function assembleBody(itens,onClickRow) {
    var code = <></>;
    
    var getRow = (item) => {
        var row = "";
        var values = Object.values(item);
        row = values.map(value => <td>{value}</td>)
        return row;
    }
    code = itens.map(item => <tr key={item["key"]} style={style_cursor}  onClick={onClickRow}>{getRow(item)}</tr>);
    return code;
}

function assembleRowHeaderFooter(item) {
    return <th>{item["value"]}</th>

}

Table.propTypes = {
    itens_body: PropTypes.array,
    itens_header: PropTypes.array,
    itens_footer: PropTypes.Array,
    // função para quando clicar na tabela
    // executar alguma ação
    // evento global para todas as linhas
    onClickRow: PropTypes.func
}


export default Table;
