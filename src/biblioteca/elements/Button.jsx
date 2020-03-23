import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import button_props from '../../props/ButtonProps.js'
import getClassNames from '../../tools/getClassName';

/*
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


class Button extends React.Component {

    constructor(props){
        super(props);
        this.state  = {definition:props.definition};
    }

    render() {
        var definition = getDefinition(this.props.delete, this.state.definition);

        return (
            <button disabled = {this.props.disabled == true? true: false } className={definition} onClick={getClickEvent(this.props.onClick).bind(this)}>
                {this.props.children}
         </button>
         );
    }
}

/* Se propriedade isDelete é verdadeira, então
    retorna somente o className "definition", não
    envolvendo outras classes do Bulma.
*/
function getDefinition(isDelete,definition){
    if(isDelete){
       return "delete";
    }else{
        return classnames(getClassNames("button "+ definition,"Button"));
    }
}
// caso seja informado onClick ele retorna a função retornada, senão retorna uma função vazia. Método criado para evitar problemas com undefined
function getClickEvent(onClick){

    if(typeof onClick == "function"){
        return onClick;
    }else{
        return ()=> {};
    }
    
}



Button.propTypes = {
    // definição CSS Bulma
    definition: PropTypes.string,
    // Método Onclick disponível
    onClick: PropTypes.func,
    // Caso exista um ícone, informar através da prop icon, passando o componente Icon
    icon: PropTypes.element,
    // Caso o botão seja do tipo delete
    delete: PropTypes.bool
};


export default Button;