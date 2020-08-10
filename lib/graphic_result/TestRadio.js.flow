import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './components/Radio';
import Control from './components/Control';

const custom = {
  checked: true
}

var itens = [
              {value:"Yes",disabled: false, onClick:()=>{alert("Yes")}, custom: {checked:true}},
              {value:"No",checked: false, onClick:()=>{alert("No")}},
              {value:"Maybe",checked: false, onClick:()=>{alert("Maybe")},disabled:true }
]

ReactDOM.render(
  <div className="container is-fluid">
      <Radio name="resposta" itens={itens}/>
  </div>
  , document.getElementById("root"))

