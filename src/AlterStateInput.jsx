import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import Input from './biblioteca/form/Input';
 

var estadoInicial = {
  type : 'text',
  placeholder :'não digitou',
  definition : 'primary rounded medium',
  value: ''
}

function useModelo() {

  const [estado, setEstado] = useState(estadoInicial)

  function onChangeEvent (e) {
    //setEstado({...estado, colorPass: "danger",colorUser:'danger'});
    if(estado.value.trim() == ''){
      setEstado({...estado,definition: 'danger medium'});
    }else{
      setEstado({...estado,value: e.target.value, definition:'large warning'});
    }
    
  }

  return [ estado,  {onChangeEvent} ]
}


function App () {
  const [ inputState,  {onChangeEvent} ] = useModelo()
  var x = inputState;
        return (
         <Input type={inputState.type} placeholder={inputState.placeholder} 
         definition={inputState.definition}
          value={inputState.value} 
         onChangeEvent = {onChangeEvent} > </Input>
          
  )  
}


export default App;






