import React from 'react';
import PropTypes from 'prop-types';


class Table extends React.Component {


    render() {
        return (
            <div className="table">
                {assembleHeader(this.props)}
                {assembleFooter(this.props)}
                {assembleBody(this.props)}
            </div>
        );

    }
}


function assembleHeader(props) {
    var header = "";
    if (props.rows_header != undefined) {
        header =
            <thead>
                <tr>
                    {props.rows_header.map(row => assembleRow(row))}
                </tr>
            </thead>;
    }
    return header;
}

function assembleBody(props) {
    var body = "";
    if (props.rows_body != undefined) {
        body = <tbody>
                {props.rows_body.map(row_array => <tr>{row_array.map(row => assembleRowBody(row))}</tr>)}
        </tbody>;
    }
    return body;
}

function assembleFooter(props) {
    var footer = "";
    if (props.rows_footer != undefined) {
        footer = <tfoot>
            <tr>
                {props.rows_footer.map(row => assembleRow(row))}
            </tr>
        </tfoot>;
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





Table.propTypes = {
    definition: PropTypes.string,
    table_footer: PropTypes.bool,
    table_header: PropTypes.bool,
    rows_header: PropTypes.array,
    rows_footer: PropTypes.array,
    rows_body: PropTypes.array
}

export default Table;