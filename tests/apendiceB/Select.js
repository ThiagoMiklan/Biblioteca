
/*
import React from 'react';
import ReactDOM from 'react-dom';
import Control from './components/Control';
import Icon from './components/Icon';
import Select from './components/Select';
import 'bulma/css/bulma.css';
import {renderToString} from 'react-dom/server';

const click = ()=>{
  alert("Clicou");
}

const itens = [
  { value: "Select DropDown", onClick:click },
  { value: "With Options", onClick: click},
];


ReactDOM.render(
    <>
      <Select  onChange={click} definition="is-rounded" itens={itens}/>
    </>
  , document.getElementById("root"))

*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import Control from './components/Control';
import Icon from './components/Icon';
import Select from './components/Select';
import 'bulma/css/bulma.css';
import {renderToString} from 'react-dom/server';

const click = ()=>{
  alert("Clicou");
}

const itens = [
  { value: "Select DropDown", onClick:click },
  { value: "With Options", onClick: click},
];


ReactDOM.render(
    <div class="select is-rounded" data-reactroot="">
	<select class="select is-rounded">
		<option value="Select DropDown">Select DropDown</option>
		<option value="With Options">With Options</option>
	</select>
</div>
  , document.getElementById("root"))

*/


/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Tabs from './components/Tabs'
import Column from './components/Column';
import Columns from './components/Columns';
import Icon from './components/Icon';
import {renderToString} from 'react-dom/server';

var itens = [{ value: "Pictures", definition: "active"},
{ value: "Musica" },
{ value: "Videos" },
{ value: "Documents" }
];


var itens_icons = [{ value: "Pictures", definition: "is-active",icon_name:"fas fa-image"},
{ value: "Musica", icon_name: "fas fa-music" },
{ value: "Videos", icon_name: "fas fa-film", icon_definition: "has-text-success" },
{ value: "Documents", icon_name: "far fa-file-alt"}
];

var itens_full = [
{ value: "Left", icon_name: "fas fa-angle-left"},
{ value: "Up", icon_name: "fas fa-angle-up"},
{ value: "Right", icon_name: "fas fa-angle-right"}
];



ReactDOM.render(
    <div class="tabs" data-reactroot="">
	<ul>
		<li class="active">
			<a>Pictures</a>
		</li>
		<li>
			<a>Musica</a>
		</li>
		<li>
			<a>Videos</a>
		</li>
		<li>
			<a>Documents</a>
		</li>
	</ul>
</div>
    ,
    document.getElementById('root'));


*/