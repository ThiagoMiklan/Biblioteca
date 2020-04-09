import React from 'react';
import classnames from 'classnames';
import getClassName from '../tools/getClassName';
import PropTypes from 'prop-types';
/**
 * Componente inspirado na classe column do bulma
 * Utilizado como filho do componente Columns
 * Possui filhos, pois funciona como um container para outros
 * elementos
 * Sem eventos
 */

const Column = (props) => {
    var definition = classnames(getClassName("column "+ props.definition, "Column"));
    return (
        <div className={definition}>{props.children}</div>
    );
}

Column.propTypes = {
    // características do bulma para a coluna
    definition : PropTypes.string
}

export default Column;