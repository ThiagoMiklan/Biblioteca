// @flow 
import * as React from 'react';
import {validate} from '../tools/type_validations';

type Props = {
    definition?: string,
    itens?: Array<Object>
}

const pointer = {
    cursor: "pointer"
}

const props_obj = {
    definition: 'string',
    itens: 'array'
}

const Level = (props:Props)=>{
    var code = <></>
    validate(props,props_obj, "Level");

    if(props.itens != undefined){
        code = assembleItens(props);
    }

    return code;
}

function assembleItens(props: Object){
    
    var left =   props.itens.filter(item => isLeft(item));
    var right =  props.itens.filter(item => isRight(item));
    var definition = (props.definition == undefined) ? "level" : "level "+ props.definition;
   
    var code = <nav className={definition}>
                    {
                    (props.center == true || (left.length <= 0  && right.length <= 0 ))
                    ? <>{assembleCenter(props.itens)}</>
                    :
                    <>
                        <div className="level-left">{assembleLeftItens(left)}</div>
                        <div className="level-right">{assembleRightItens(right)}</div>
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
    return <p key={item["key"]} style={pointer} onClick={item["onClick"]} className={item["definition"] == undefined ? "level-item" : "level-item "+item["definition"]}>{item["value"]}</p>
}


export default Level;