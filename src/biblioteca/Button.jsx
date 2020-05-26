// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import {renderToString} from 'react-dom/server';

type Props = {
  disabled?: bool,
  delete?: bool,
  definition?: string,
  children?: React.Node,
  custom?: any,
  onClick?: () => void
}

/*

Possui children
Eventos: onClick no <button> </button>
Observações: 

    1 - Caso exista a necessidade de adicionar um ícone ao componente Button, é necessário seguir
             a seguinte estrutura:

            <Button definition="info" >
                <Icon icon_name="fas fa-check" [right={true} OR empty prop right]>
                    Nome do botão
                </Icon>
            </Button >

            Sendo necessário informar o componente Icon como filho do componente Button
            e o nome do botão deve ser informado no Icon e não no Button como em outras
            situações onde usa-se o componente isolado.
*/

const Button= (props: Props)=>{
    var definition = getDefinition(props);
    
     return <button 
                {...props.custom} 
                disabled = {props.disabled == true? true: false } 
                className={definition} 
                onClick={props.onClick}
                >
                {props.children}
         </button>
         ;
}

function getDefinition(props){
    var definition = "";

    if(props.delete ==  true){
        definition = "delete";
    }else{
        definition = (props.definition == undefined) ? "button" : "button "+ props.definition;
    }

    return definition;
}

Button.propTypes = {
    definition: PropTypes.string,
    onClick: PropTypes.func,
    delete: PropTypes.bool,
    disabled: PropTypes.bool
};


export default Button;