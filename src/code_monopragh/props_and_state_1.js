import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'

const Input = (props)=>{
  return <div className="columns is-centered">
            <div className="column is-half">
              <input className={props.definition} value="Example Props and State"/>
            </div>
        </div>
}

const InputParent = (props)=>{
  return <Input definition="input is-primary"/>
}


ReactDOM.render(
 <InputParent/>
,
  document.getElementById("root"))
