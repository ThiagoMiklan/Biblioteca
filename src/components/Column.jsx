// @flow
import * as  React from 'react';
import PropTypes from 'prop-types';
import {validate} from '../tools/type_validations.js';
/**
 * Componente inspirado na classe column do bulma
 * Utilizado como filho do componente Columns
 * Possui filhos, pois funciona como um container para outros
 * elementos
 * Sem eventos
 */
 type Props = {
  definition?: string,
  children?: React.Node
 }

 const props_obj ={
     definition: "string"
 }

const Column = (props: Props) => {
    validate(props, props_obj);
    var definition = (props.definition == undefined) ? "column" : "column "+ props.definition;
    return (
        <div className={definition}>{props.children}</div>
    );
}

Column.propTypes = {
    // características do bulma para a coluna
    definition : PropTypes.string
}

export default Column;