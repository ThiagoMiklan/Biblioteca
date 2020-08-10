import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';

import ButtonHook from '../hooks/ButtonHook'

var estadoInicial = {
  definition: 'button is-primary'
}

function useModelo() {

  const [estado, setEstado] = useState(estadoInicial)

  function onDataValida () {
    //setEstado({definition: 'button is-danger'})
    alert("deu certo");
  }

  return [ estado,  {onDataValida} ]
}


function App () {
  const [ estado,  {onDataValida} ] = useModelo()
 
        return (
        <ButtonHook definition ={estado.definition} onClick={onDataValida} />
          
  )  
}


export default App;