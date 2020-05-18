import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Table from './biblioteca/Table.jsx';
import 'bulma/css/bulma.min.css'
import SearchTable from './biblioteca/SearchTable';

var itens_header = [
  { value: "Pos" }, { value: "Team" }, { value: "Pld" }, { value: "W" },
  { value: "D" }, { value: "L" }, { value: "GF" }, { value: "GA" },
  { value: "GD" }, { value: "Pts" }, { value: "Qualification or relegation" }
]



var itens_footer = [
  { value: "Pos" }, { value: "Team" }, { value: "Pld" }, { value: "W" },
  { value: "D" }, { value: "L" }, { value: "GF" }, { value: "GA" },
  { value: "GD" }, { value: "Pts" }, { value: "Qualification or relegation" }
]


function SearchTableParent(props) {
  var initial = {
    itens_body: [
      {
        Pos: "2", team: "Arsenal", pld: "38", w: "20",
        D: "11", L: "7", GF: "65", GA: "36",
        GD: "+29", Pts: "71", Quali: "Qualification for the Champions League group stage"
      },
      {
        Pos: "3", team: "Chelsea", pld: "35", w: "20",
        D: "11", L: "7", GF: "65", GA: "36",
        GD: "+29", Pts: "65", Quali: "Qualification for the Champions League group stage"
      }
    ]
  }

  function onChange(e) {
    
    
    
  } 
  

  const [state, setState] = useState(initial)
  return <SearchTable label="Busca Times"
                      value="Voltar" onClick={() => { alert("clicou") }}
                      icon_name="fas fa-search" control_definition="icons-right"
                      icon_definition="info" itens_header={itens_header}
                      button_definition="success" input_definition="warning" 
                      header_definition="background-grey-light"
                      itens_body={state.itens_body} itens_footer={itens_footer} 
                      table_definition="background-grey-lighter"
                      onChange={onChange}
  />
}


ReactDOM.render(
  <SearchTableParent />
  , document.getElementById('root')
);
