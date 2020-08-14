import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'

const Input = (props)=>{
  return <div className="columns is-centered">
            <div className="column is-half">
              <input className={props.definition} value="Example Props and State"/>
            </div>
            <div className="column is-half">
              <button className="button" onClick={props.onClick}>{props.name}</button>
            </div>
        </div>
}

const InputParent = (props)=>{
  const[state,{onClick}]  = useModel();
  return <Input definition={state.definition} onClick={onClick} name={state.name}/>
}

function useModel(){
  let initial = {
    definition: 'input is-sucess',
    count:0,
    name: "Trocar para primary"
  }

  const[state,setState] = useState(initial);

  var onClick = ()=>{
    if(state.count == 0){
      setState({definition:"input is-primary",count: state.count+1,name:"Trocar para info"})
    }else if(state.count == 1){
      setState({definition:"input is-info",count: state.count+1,name:"Trocar para waening"})
    }else if(state.count == 2){
      setState({definition:"input is-warning",count: state.count+1,name:"Trocar para danger"})
    }else if(state.count == 3){
      setState({definition:"input is-danger",count: state.count+1,name:"fim das trocas"})
    }

  }

  return [state,{onClick}];
}

ReactDOM.render(
 <InputParent/>
,
  document.getElementById("root"))
