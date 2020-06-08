// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { validate } from '../tools/type_validations';

type Props = {
    itens?: Array<Object>,
    definition?: string
}

const props_obj = {
    itens: "array",
    definition: "string"
}

const TagList = (props: Props) => {
    validate(props, props_obj);
    return assembleTagList(props);
}

function assembleTagList(props) {
    var code = <></>;

    if (props.itens != undefined && Array.isArray(props.itens)) {
        code = assembleListWithItens(props);
    }
    return code;
}

// monta lista caso seja informado os itens como props
// monta lista quando props.itens == array && props.itens != undefined
function assembleListWithItens(props) {

    var itens = props.itens;
    var definition = (props.definition == undefined ? "tags" : "tags " + props.definition)
    var code = <></>;

    if (itens != undefined) {
        code = <div className={definition}>
            {itens.map(item => assembleTag(item["definition"], item["value"], item["onClick"]))}
        </div>
    }
    return code;
}

// monta a tag 
function assembleTag(definition, value, onClick) {
    var definitionTag = "tag " + definition;
    return <span onClick={onClick} className={definitionTag}>{value}</span>
}

// monta lista conforme as props.children
// espera que props.children contenha uma série de
// componentes <Tag>
function assembleListWithChildren(props) {

}

TagList.propTypes = {
    itens: PropTypes.array,
}


export default TagList;