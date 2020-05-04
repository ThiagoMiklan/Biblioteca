// @flow
import * as  React from 'react';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import PropTypes from 'prop-types';
import checkerDefinition from '../tools/checker.js';

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

const Column = (props: Props) => {
    var definition = (props.definition == undefined)? "": props.definition;
    checkerDefinition(definition,"Column")
    var definition = classnames(getClassName("column "+ definition, "Column"));
    return (
        <div className={definition}>{props.children}</div>
    );
}

Column.propTypes = {
    // características do bulma para a coluna
    definition : PropTypes.string
}

export default Column;