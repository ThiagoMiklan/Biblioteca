/*
import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './components/Panel';
import Column from './components/Column';
import Columns from './components/Columns';
import 'bulma/css/bulma.css';
import Button from './components/Button';
import CheckBox from './components/CheckBox';


ReactDOM.render(
  <nav class="panel">
  <p class="panel-heading">
    Repositories
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="Search"/>
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active">All</a>
    <a>Public</a>
    <a>Private</a>
    <a>Sources</a>
    <a>Forks</a>
  </p>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    bulma
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    marksheet
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    minireset.css
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    jgthms.github.io
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    daniellowtw/infboard
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    mojs
  </a>
  <label class="panel-block">
    <input type="checkbox"/>
    remember me
  </label>
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      Reset all filters
    </button>
  </div>
</nav>
  , document.getElementById('root'));
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import Panel from './components/Panel';
import Column from './components/Column';
import Columns from './components/Columns';
import 'bulma/css/bulma.css';
import Button from './components/Button';
import CheckBox from './components/CheckBox';


const onChange = () => {
  alert("Changed");
}

const itens_tabs = [
  { value: "All", href: "www.facebook.com", onClick: () => { alert("clicked All") }, icon_definition: "is-warning", icon_name: "fas fa-home" },
  { value: "Public", href: "www.facebook.com", onClick: () => { alert("clicked Public") }, icon_definition: "is-danger", icon_name: "far fa-user" },
  { value: "Private", href: "www.facebook.com", onClick: () => { alert("clicked Private") }, icon_name: "fas fa-users" },
  { value: "Sources", href: "www.facebook.com", onClick: () => { alert("clicked Sourcers") }, icon_definition: "is-success", icon_name: "fas fa-hand-holding-usd" },
  { value: "Forks", href: "www.facebook.com", onClick: () => { alert("clicked Forks") }, icon_definition: "is-success", icon_name: "fas fa-hand-holding-usd" }
]


const itens_blocks = [
  { value: "Bulma", href: "www.facebook.com", onClick: () => { alert("clicked Bulma") }, icon_definition: "has-text-warning", icon_name: "fab fa-css3-alt" },
  { value: "Github", href: "www.facebook.com", onClick: () => { alert("clicked Github") }, icon_name: "fab fa-github" },
  { value: "Twitter", href: "www.facebook.com", onClick: () => { alert("clicked Twitter") }, icon_definition: "has-text-info", icon_name: "fab fa-twitter" },
  { value: "Facebook", href: "www.facebook.com", onClick: () => { alert("clicked Facebooks") }, icon_definition: "has-text-info", icon_name: "fab fa-facebook" },
  { value: <CheckBox onClick={() => { alert("Clicked checkbox") }}>remember me</CheckBox> }
  ,
  { value: <Button definition="is-fullwidth is-info is-light" onClick={() => { alert("Clicou no botao") }} label="Reset All"/>  }
]

ReactDOM.render(
  <>
        <Panel header="Primary" itens_tabs={itens_tabs} itens_blocks={itens_blocks}></Panel>
        
        </>
   
  , document.getElementById('root'));

*/