import React from 'react';
import getClassName from '../tools/getClassName';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 *  Funciona como um container para Column
 *  Baseado na classe Columns do Bulma
 *  Sem eventos
 */

const Columns = (props)=>{
    var definition = classnames(getClassName("columns "+ props.definition,"Columns"));

    return <div className={definition}>
        {
            React.Children.map(props.children, (child, i)=>{
                return child;
            })
        }
    </div>

}

Columns.propTypes = {
    // Características do Bulma
    definition: PropTypes.string
}



export default Columns