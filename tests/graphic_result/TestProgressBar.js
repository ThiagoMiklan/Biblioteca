import React,{useState,useEffect,useReducer}from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './components/ProgressBar';
import 'bulma/css/bulma.css' 

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
  

  return <ProgressBar definition ="progress" value ={state.value} max ={100}/> 
}

ReactDOM.render(
    <div class="container is-fluid">
      <ProgressHook/>
      <ProgressBar value ={15} max ={100}/>
      <ProgressBar definition ="is-primary" value ={15} max ={100}/>
      <ProgressBar definition ="is-link" value ={30} max ={100}/>
      <ProgressBar definition ="is-info" value ={45} max ={100}/>
      <ProgressBar definition ="is-sucess" value ={60} max ={100}/>
      <ProgressBar definition ="is-warning" value ={75} max ={100}/>
      <ProgressBar definition ="is-danger" value ={90} max ={100}/>
      <ProgressBar definition ="is-small" value ={15} max={100}/>
      <ProgressBar definition ="is-medium" value ={15} max={100}/>
      <ProgressBar definition ="is-large" value ={15} max={100}/>
    </div>,document.getElementById('root')
 );

