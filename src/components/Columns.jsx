// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import {validate} from '../tools/type_validations.js';

/**
 *  Funciona como um container para Column
 *  Baseado na classe Columns do Bulma
 *  Sem eventos
 */
type Props = {
  definition?: string,
  children?: React.Node
 }

 const props_obj ={
     definition: 'string'
 }

const Columns = (props: Props)=>{
        validate(props, props_obj);
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