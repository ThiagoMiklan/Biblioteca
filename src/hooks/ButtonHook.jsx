import React from 'react';
import {useState,useCallback} from 'react';


const ButtonHook =(props)=>{

    return <button className={props.definition} onClick={props.onClick}> testando</button>;
}


export default ButtonHook;

