// @flow

import React from 'react';
import PropTypes from 'prop-types';
/*
Componente que funciona fornece a opção de criar uma lista
Não consta na documentação do Bulma um componente para Lista, sendo criado 
a partir da documentação do componente Content.
Eventos: onClick na tag <li>
Obs: Recomendável o uso do componente Content como pai do componente List, 
para evitar problemas de exibição.
*/

type Props = {
    itens?: Array<Object>,
    definition?: string
}

const List = (props:Props)=> {
    
    return (assembleList(props));    
}

 // monta o esqueleto da(s) lista(s) através do map e depois monta cada linha de cada lista
function assembleList(props) {
    var list = props.itens;
    var list_tags = "";
    
    if(list != undefined && Array.isArray(list)){
        list_tags = 
            <ol className={props.definition}>
                {assembleRow(list)}
            </ol>
        
    }
    
    return list_tags;
}

function assembleRow(list){
    return (list.map(item =><li onClick={item["onClick"]}>{item["value"]}</li> ));
}

List.propTypes ={
    definition: PropTypes.string,
    itens: PropTypes.array.isRequired

}


export default List;