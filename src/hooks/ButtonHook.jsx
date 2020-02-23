import React from 'react';
import {useState,useCallback} from 'react';


const ButtonHook =(props)=>{
    const[definition,setDefinition] = useState(props.definition);

    return <button className={props.definition} onClick={props.onClick}> {props.value} </button>;
}


export default ButtonHook;

