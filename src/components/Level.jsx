// @flow 
import * as React from 'react';

type Props = {
    definition?: string,
    itens?: Array<Object>
}

const Level = (props:Props)=>{
    return assembleItens(props);
}

function assembleItens(props: Object){
    var left =   props.itens.filter(item => isLeft(item));
    var right =  props.itens.filter(item => isRight(item));
    
    var code = <nav class="level">
                    {
                    props.center == true 
                    ? <>{assembleCenter(props.itens)}</>
                    :
                    <>
                        <div class="level-left">{assembleLeftItens(left)}</div>
                        <div class="level-right">{assembleRightItens(right)}</div>
                    </>
                    }
                </nav>
    return code;
}

function noSide(item){
    if((item['right'] == undefined || item['right'] == false) && (item['left'] == undefined || item['left'] == false) ){
        return item;
    }
}

function isRight(item){
     if(item['right'] == true){
        return item;
    }
}

function isLeft(item){
       if(item['left'] == true){
        return item;
    }
}

function assembleLeftItens(left: Array<Object>){
    var code =  left.map(item => assembleLevelItem(item));
     return code;
}   

function assembleRightItens(right: Array<Object>){
    var code =  right.map(item =>assembleLevelItem(item));
    return code;
}

function assembleCenter(itens: Array<Object>){
    var code = itens.map(item =>assembleLevelItem(item)); 
    return code;
}

function assembleLevelItem(item: Object){
    return <p class={item["definition"] == undefined ? "level-item" : "level-item "+item["definition"]}>{item["value"]}</p>
}


export default Level;