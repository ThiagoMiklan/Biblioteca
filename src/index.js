import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import Button from './hooks/ButtonHook';

var clickCount = 0;

const Helper = (props)=>{
    const[definition,setDefinition] =  useState("button is-primary");
    
    var onClickFunc = ()=>{
       
        if(clickCount == 0){
            setDefinition("button is-danger");
        }else if(clickCount == 1){
            setDefinition("button is-warning");
        }else if(clickCount == 2){
            setDefinition("button is-info");
        }else if(clickCount == 3){
            setDefinition("button is-info");
        }
        
        clickCount =  clickCount + 1;
    };

    return <Button definition={definition} value="testando hooks denovo" onClick={onClickFunc}/>
}



ReactDOM.render( 
   <Helper/>
 ,
document.getElementById('root'));
