// @flow
import React from 'react';
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
    validate(props, props_obj,"TagList");
    return assembleTagList(props);
}

function assembleTagList(props) {
    var code = <></>;

    if (props.itens != undefined && Array.isArray(props.itens)) {
        code = assembleListWithItens(props);
    }
    return code;
}

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

function assembleTag(definition, value, onClick) {
    var definitionTag = "tag " + definition;
    return <span onClick={onClick} className={definitionTag}>{value}</span>
}



export default TagList;