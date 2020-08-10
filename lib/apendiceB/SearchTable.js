/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table.jsx';
import 'bulma/css/bulma.min.css'
import SearchTable from './components/SearchTable';


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
                      icon_name="fas fa-search" control_definition="has-icons-right"
                      icon_definition="is-info" itens_header={itens_header}
                      button_definition="is-success" input_definition="is-warning" 
                      header_definition="has-background-grey-light"
                      itens_body={state.itens_body} itens_footer={itens_footer} 
                      table_definition="has-background-grey-lighter"
                      onChange={onChange}
  />
}


ReactDOM.render(
  <SearchTableParent />
  , document.getElementById('root')
);
*/

/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css'
import SearchTable from './components/SearchTable';


ReactDOM.render(
  <div class="container" data-reactroot="">
	<div class="field">
		<label class="label">Busca Times</label>
		<div class="control has-icons-right">
			<div class="control">
				<input class="input is-warning"/>
			</div>
			<span class="icon is-info is-right">
				<i class="fas fa-search"/>
			</span>
			<span/>
		</div>
	</div>
	<br/>
	<table class="table has-background-grey-lighter">
		<thead class="has-background-grey-light">
			<tr>
				<th>Pos</th>
				<th>Team</th>
				<th>Pld</th>
				<th>W</th>
				<th>D</th>
				<th>L</th>
				<th>GF</th>
				<th>GA</th>
				<th>GD</th>
				<th>Pts</th>
				<th>Qualification or relegation</th>
			</tr>
		</thead>
		<tbody>
			<tr style={{cursor:"pointer"}}>
				<td>2</td>
				<td>Arsenal</td>
				<td>38</td>
				<td>20</td>
				<td>11</td>
				<td>7</td>
				<td>65</td>
				<td>36</td>
				<td>+29</td>
				<td>71</td>
				<td>Qualification for the Champions League group stage</td>
			</tr>
			<tr style={{cursor:"pointer"}}>
				<td>3</td>
				<td>Chelsea</td>
				<td>35</td>
				<td>20</td>
				<td>11</td>
				<td>7</td>
				<td>65</td>
				<td>36</td>
				<td>+29</td>
				<td>65</td>
				<td>Qualification for the Champions League group stage</td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<th>Pos</th>
				<th>Team</th>
				<th>Pld</th>
				<th>W</th>
				<th>D</th>
				<th>L</th>
				<th>GF</th>
				<th>GA</th>
				<th>GD</th>
				<th>Pts</th>
				<th>Qualification or relegation</th>
			</tr>
		</tfoot>
	</table>
	<div class="buttons">
		<button class="button is-success">Voltar</button>
	</div>
</div>
  , document.getElementById('root')
);

*/
"use strict";