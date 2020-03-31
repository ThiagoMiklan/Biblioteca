import React from 'react';
import ReactDOM from 'react-dom';
import Radio from './biblioteca/form/Radio';
import Control from './biblioteca/elements/Control';
import './css/bulma.css';
import {renderToString} from 'react-dom/server'


var itens = [
              {value:"Yes",disabled: false, onClick:()=>{alert("Yes")}},
              {value:"No",checked: true, onClick:()=>{alert("No")}},
              {value:"Maybe",checked: true, onClick:()=>{alert("Maybe")},disabled:true }
]
var code = renderToString(<Radio name="resposta" itens={itens}/>);

ReactDOM.render(
  <div className="container is-fluid">
      <Radio name="resposta" itens={itens}/>
  </div>
  , document.getElementById("root"))

