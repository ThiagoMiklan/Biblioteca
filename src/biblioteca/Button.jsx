import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getClassNames from '../tools/getClassName';

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

const Button= (props)=>{

var definition = getDefinition(props.delete, props.definition);

        return <button disabled = {props.disabled == true? true: false } className={definition} onClick={getClickEvent(props.onClick)}>
                {props.children}
         </button>
         ;
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
    // definição de características do Bulma
    definition: PropTypes.string,
    // Evento para quando clicar no botão
    onClick: PropTypes.func,
    // Caso o botão seja do tipo delete
    delete: PropTypes.bool
};


export default Button;