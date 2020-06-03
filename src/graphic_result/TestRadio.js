import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './components/Radio';
import Control from './components/Control';
 
var itens = [
              {value:"Yes",disabled: false, onClick:()=>{alert("Yes")}},
              {value:"No",checked: true, onClick:()=>{alert("No")}},
              {value:"Maybe",checked: true, onClick:()=>{alert("Maybe")},disabled:true }
]

ReactDOM.render(
  <div className="container is-fluid">
      <Radio name="resposta" itens={itens}/>
  </div>
  , document.getElementById("root"))

