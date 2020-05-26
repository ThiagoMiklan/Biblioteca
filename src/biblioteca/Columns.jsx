// @flow
import * as React from 'react';
import PropTypes from 'prop-types';


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
        var definition = (props.definition == undefined)? "columns": "columns "+ props.definition;
        return <div className={definition}>
        {
            React.Children.map(props.children, (child, i)=>{
                return child;
            })
        }
    </div>

}

Columns.propTypes = {
    definition: PropTypes.string
}



export default Columns