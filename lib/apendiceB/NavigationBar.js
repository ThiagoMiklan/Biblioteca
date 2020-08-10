/*
import React from 'react';
import ReactDOM from 'react-dom';
import "bulma/css/bulma.css";
import Button from './components/Button.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import {renderToString} from 'react-dom/server';


const itens_start = [
  { "value": "Home" },
  { "value": "Documentation" },
  [{ value: "More", definition: "is-active" },
  { value: "About", definition: "is-active", onClick: () => { alert("Clicked") } },
  { value: "Jobs" },
  { value: "Contact" },
  { value: "Report a issue" }
  ]
];

var itens_end = [{ value: <Button definition="is-info" label="Log in"/> },
{ value: <Button definition="is-primary" label="Log out"/> }
];



ReactDOM.render(
  <div className="container is-fluid">

   <NavigationBar 
      definition="primary"
      src="https://versions.bulma.io/0.7.2/images/bulma-logo.png"
      link_brand="https://bulma.io"
      width_brand={112}
      height_brand={28}
      alt_brand="Bulma: a modern CSS framework based on Flexbox"
      itens_start={itens_start}
      itens_end={itens_end}
    />
 </div>
  ,
  document.getElementById('root')
);
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import "bulma/css/bulma.css";
import Button from './components/Button.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import {renderToString} from 'react-dom/server';


const itens_start = [
  { "value": "Home" },
  { "value": "Documentation" },
  [{ value: "More", definition: "is-active" },
  { value: "About", definition: "is-active", onClick: () => { alert("Clicked") } },
  { value: "Jobs" },
  { value: "Contact" },
  { value: "Report a issue" }
  ]
];

var itens_end = [{ value: <Button definition="is-info" label="Log in"/> },
{ value: <Button definition="is-primary" label="Log out"/> }
];



ReactDOM.render(
 <nav class="navbar primary" data-reactroot="">
	<div class="navbar-brand">
		<a class="navbar-item">
			<img src="https://versions.bulma.io/0.7.2/images/bulma-logo.png" width="112" height="28"/>
		</a>
	</div>
	<div class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item undefined">Home</a>
			<a class="navbar-item undefined">Documentation</a>
			<div class="navbar-item has-dropdown is-hoverable">
				<a class="navbar-link">More</a>
				<div class="navbar-dropdown">
					<a class="navbar-item is-active">About</a>
					<a class="navbar-item undefined">Jobs</a>
					<a class="navbar-item undefined">Contact</a>
					<a class="navbar-item undefined">Report a issue</a>
				</div>
			</div>
		</div>
		<div class="navbar-end">
			<a class="navbar-item undefined">
				<button class="button is-info">Log in</button>
			</a>
			<a class="navbar-item undefined">
				<button class="button is-primary">Log out</button>
			</a>
		</div>
	</div>
</nav>
  ,
  document.getElementById('root')
);


*/
"use strict";