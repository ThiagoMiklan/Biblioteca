import React,{useState,useEffect,useReducer}from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './biblioteca/ProgressBar';
 

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {value: state.value + 1};
    default:
      throw new Error();
  }
}


const ProgressHook = (props)=>{
  var initial = {value: 0};
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    setInterval(() => {
      dispatch({ type: 'increment' })
    }, 1000)
  }, []);
  

  return <ProgressBar definition ="progress" value ={state.value} max ="100"/> 
}

ReactDOM.render(
    <div class="container is-fluid">
      <ProgressHook/>
      <ProgressBar definition ="progress" value ="15" max ="100"/>
      <ProgressBar definition ="progress primary" value ="15" max ="100"/>
      <ProgressBar definition ="progress link" value ="30" max ="100"/>
      <ProgressBar definition ="progress info" value ="45" max ="100"/>
      <ProgressBar definition ="progress sucess" value ="60" max ="100"/>
      <ProgressBar definition ="progress warning" value ="75" max ="100"/>
      <ProgressBar definition ="progress danger" value ="90" max ="100"/>
      <ProgressBar definition ="progress small" value ="15" max="100"/>
      <ProgressBar definition ="progress medium" value ="15" max="100"/>
      <ProgressBar definition ="progress large" value ="15" max="100"/>
    </div>,document.getElementById('root')
 );

