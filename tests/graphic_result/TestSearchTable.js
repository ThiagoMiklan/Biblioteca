import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.jsx';
import 'bulma/css/bulma.min.css'
import SearchTable from './components/SearchTable';

const itens_header = [
  { value: "Pos" }, { value: "Team" }, { value: "Pld" }, { value: "W" },
  { value: "D" }, { value: "L" }, { value: "GF" }, { value: "GA" },
  { value: "GD" }, { value: "Pts" }, { value: "Qualification or relegation" }
]



const itens_footer = [
  { value: "Pos" }, { value: "Team" }, { value: "Pld" }, { value: "W" },
  { value: "D" }, { value: "L" }, { value: "GF" }, { value: "GA" },
  { value: "GD" }, { value: "Pts" }, { value: "Qualification or relegation" }
]

const initial = {
    itens_body: [
      {
        Pos: "2", team: "Flamengo", pld: "38", w: "20",
        D: "11", L: "7", GF: "65", GA: "36",
        GD: "+29", Pts: "71", Quali: "Qualification for the Libertadores"
      },
      {
        Pos: "3", team: "Palmeiras", pld: "23", w: "20",
        D: "11", L: "7", GF: "65", GA: "36",
        GD: "+29", Pts: "65", Quali: "Qualification for the Libertadores"
      }
    ]
  }

function SearchTableParent(props) {

  function onChange(e) {
      alert("typed "+ e.target.value);
  } 

  const [state, setState] = useState(initial)
  return <SearchTable label="Find Team"
                      value="Back" onClick={() => { alert("clicou") }}
                      icon_name="fas fa-search" control_definition="has-icons-right"
                      icon_definition="is-info" itens_header={itens_header}
                      button_definition="is-success" input_definition="is-warning" 
                      header_definition="has-background-grey-light"
                      itens_body={state.itens_body} itens_footer={itens_footer} 
                      table_definition="has-background-grey-lighter is-fullwidth is-bordered is-hoverable"
                      onChange={onChange}
  />
}

ReactDOM.render(
  <div className="container is-fluid">
  <SearchTableParent />
  </div>
  , document.getElementById('root')
);
