// @flow
import React from 'react'
import PropTypes from 'prop-types';
import Control from './Control';
import Input from './Input';
import { validate } from '../tools/type_validations';

type Props = {
    itens?: Array<Object>,
    name?: string
}
const props_obj={
    itens: "array",
    name: "string"
}

const Radio = (props: Props) => {
    validate(props,props_obj);
    return <Control>
        {assembleItens(props)}
    </Control>
}

function assembleItens(props) {
    var code = "";
    var itens = props.itens;

    if (Array.isArray(itens) && itens != undefined) {
        code = itens.map(item => {
            return assembleRadio(item, props.name)
        });
    }


    return code;
}


function assembleRadio(item,name){
    return <label className="radio" disabled={item["disabled"]} >
            <input type="radio" onClick={item["onClick"]} name={name} checked={item["checked"]} />
                {item["value"]}
            </label>
}

Radio.propTypes = {
    itens: PropTypes.array,
    name: PropTypes.string
}
export default Radio;