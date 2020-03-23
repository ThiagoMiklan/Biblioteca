import React from 'react';
import classnames from 'classnames';
import getClassName from '../../tools/getClassName';
import PropTypes from 'prop-types';

const Column = (props) => {
    var definition = classnames(getClassName("column "+ props.definition, "Column"));
    return (
        <div className={definition}>{props.children}</div>
    );
}

Column.propTypes = {
    definition : PropTypes.string
}

export default Column;