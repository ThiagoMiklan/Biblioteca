// @flow
import * as React from 'react';
import getClassName from '../tools/getClassName';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import checkerDefinition from '../tools/checker.js';

/**
 *  Funciona como um container para Column
 *  Baseado na classe Columns do Bulma
 *  Sem eventos
 */
type Props = {
  definition?: string,
  children?: React.Node
 }

const Columns = (props: Props)=>{
    var definition = (props.definition == undefined)? "": props.definition;
    checkerDefinition(definition,"Columns");
    var definition = classnames(getClassName("columns "+ definition,"Columns"));

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