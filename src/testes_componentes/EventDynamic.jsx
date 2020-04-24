import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Input from './biblioteca/Input';

// Teste de re-render
// Demonstra como 
const EventDynamic = (props) => {
  const[state,{onClickBtn}] = useModel();

  return <> <control>
    <input draggable={state.draggable} type="text"></input>
    <button onClick={onClickBtn}>Click to drag</button>
  </control>
  </>
}


function useModel() {
  var initial = {
    draggable: false,
    clicked: 0
  }
  const [state, setState] = useState(initial);

  useEffect(()=>{
    // elimina primeira atualização pós render
    // sem essa condição a primeira renderização irá assumir draggable == true
    // a condição justamente trata a primeira execução "forçada"  de useEffect
      if(state.clicked != 0 ){
        setState({...state, draggable: true})
      }
  },[state.clicked])

  function onClickBtn(){
    setState({...state,clicked: state.clicked+1});
  }

  return [state,{onClickBtn}];
}



ReactDOM.render(<EventDynamic value="thiago" />
  , document.getElementById('root'));


