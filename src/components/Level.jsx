// @flow 
import * as React from 'react';

type Props = {
    definition?: string,
    itens?: Array<Object>
}

const Level = (props:Props)=>{
    
    return <nav class="level">
            {props.itens != undefined && assembleItens(props.itens)} 
           </nav>
}

function assembleItens(itens: Array<Object>){
    var left =   itens.filter(item => isLeft(item));
    var right =  itens.filter(item => isRight(item));
    
    var code = <>
                {left.length > 0 && <div clasName="level-left"> {assembleLeftItens(left)}</div>} 
                {right.length > 0 && <div clasName="level-right">{assembleRightItens(right)}</div>}
                </>

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
    var code =  left.map(item => <p clasName="level-item">{item["value"]}</p>)
                
    return code;
}   

function assembleRightItens(right: Array<Object>){
    var code =  <div>
                 {right.map(item =><p clasName="level-item">{item["value"]}</p>)}
                </div>
    return code;
}


export default Level;