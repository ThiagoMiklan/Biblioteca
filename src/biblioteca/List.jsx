import React from 'react';
import getClassName from '../tools/getClassName';
import className from 'classnames';
import PropTypes from 'prop-types';

/*
Componente que funciona fornece a opção de criar uma lista
Não consta na documentação do Bulma um componente para Lista, sendo criado 
a partir da documentação do componente Content.
Obs: Para o correto funcionamento das listas, recomenda-se o uso do componente Content
como pai da lista desejada ou algum outro container. Caso não se use um container para
List, provalvemente existirá problemas de exibição
*/
const List = (props)=> {
        return (assembleList(props));    
}

 // monta o esqueleto da(s) lista(s) através do map e depois monta cada linha de cada lista
function assembleList(props) {
    var list = props.itens;
    var list_tags = "";
    
    if(list != undefined && Array.isArray(list)){
        list_tags = 
            <ol className={className(getClassName(props.definition, "List"))}>
                {assembleRow(list)}
            </ol>
        
    }
    
    return list_tags;
}

function assembleRow(list){
    return (list.map(item =><li>{item}</li> ));
}

List.propTypes ={
    definition: PropTypes.string,
    itens: PropTypes.array.isRequired

}


export default List;