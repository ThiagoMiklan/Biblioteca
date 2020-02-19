import React from 'react';
import {useState,useCallback} from 'react';


const TesteHook =(props)=>{
  
   const [count, setStateButton ] =  useState(props.count);
    
   return (
            <button>
                className={props.definition} onClick={props.onClick}>
              {count}
         </button>);
    
}

export default TesteHook;