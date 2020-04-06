import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getlClassName from '../tools/getClassName';
import {renderToString} from 'react-dom/server';

const Table = (props)=> {
    var definition = classnames(getlClassName("table "+props.definition,"Table"));
        return (
            <table className={definition}>
                {assembleHeader(props)}
                {assembleFooter(props)}
                {assembleBody(props)}
            </table>
        );
}


function assembleHeader(props) {
    var header = "";
    try{
        if(!Array.isArray(props.rows_header)){
            throw new Error("Invalid Argument Object");
        }
    
        if (props.rows_header != undefined) {
            header =
                <thead>
                    <tr>
                        {props.rows_header.map(row => assembleRow(row))}
                    </tr>
                </thead>;
        }
    }catch(e){
        console.log(e.message);
    }
    
    return header;
}

function assembleBody(props) {
    var body = "";
    try{
        if(!Array.isArray(props.rows_body)){
            throw new Error("Invalid Argument Exception");
        }
        if(props.isQuery ==  true){
            body = <tbody>
                    {assembleRowQuery(props.rows_body)}
                </tbody>
        }else if (props.rows_body != undefined) {
            body = <tbody>
                    {props.rows_body.map(row_array => <tr>{row_array.map(row => assembleRowBody(row))}</tr>)}
            </tbody>;
        }
    }catch(e){
        console.log(e.message);
    }
    var x = renderToString(body);
  
    
    return body;
}

function assembleFooter(props) {
    var footer = "";
    try{
        if (props.rows_footer != undefined) {
            footer = <tfoot>
                <tr>
                    {props.rows_footer.map(row => assembleRow(row))}
                </tr>
            </tfoot>;
        }
    }catch(e){
        console.log(e.message);
    }
    
    return footer;
}

function assembleRow(row) {
    if (typeof (row) != "object") {
        return <th>{row}</th>;
    } else {
        return <th><abbr title={String(row.abbr_text)}>{String(row.value)}</abbr></th>
    }
}

function assembleRowBody(row) {

    var array1 = row[0];
   
    if (typeof (row) != "object") {
        return <td>{row}</td>;
    } else {
        var x = row.have_link;
        if (row.have_link == true) {
        return <th><a title={row.value} href={row.href}> {row.value}</a></th>
        }
    }
}

function assembleRowQuery(rows_body){
    var code = "";

    var getRow= (item)=>{
        var row = "";
        var values =  Object.values(item);
        row  = values.map(value => <td>{value}</td>)
        return row;
    }
    code = rows_body.map(item => <tr>{getRow(item)}</tr>);
    return code;
}

Table.propTypes = {
    definition: PropTypes.string,
    rows_header: PropTypes.array,
    rows_footer: PropTypes.array,
    rows_body: PropTypes.array,
    isQuery: PropTypes.bool
}

export default Table;