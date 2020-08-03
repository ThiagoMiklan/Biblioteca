
import React from 'react';
import ReactDOM from 'react-dom';
import BreadCrumb from './components/BreadCrumb.jsx';
import Icon from './components/Icon';
import 'bulma/css/bulma.css'


const onClickItem = () => {
  alert("Clicked");
}

const itens = [
  { value: "Bulma" },
  { value: "Documentation" },
  { value: "Componentes" },
  { value: "BreadCrumb" }
];

const itens_with_icons = [
{ value: <Icon icon_name="fas fa-home">Bulma</Icon> },
{ value: <Icon icon_name="fas fa-book">Documentation</Icon> },
{ value: <Icon icon_name="fas fa-puzzle-piece">Componentes</Icon> },
{ value: <Icon icon_name="fas fa-thumbs-up">BreadCrumb</Icon> }];

const itens_with_onClick = [
  { value: "Bulma", onClick: onClickItem },
  { value: "Documentation", onClick: onClickItem },
  { value: "Componentes", onClick: onClickItem },
  { value: "BreadCrumb", onClick: onClickItem }
];

const itens_with_href =[
  {value:"Bulma",href:"https://ufsc.br"},
  {value:"Documentation",href:"https://ufsc.br"},
  {value:"Componentes",href:"https://ufsc.br"}, 
  { value:"BreadCrumb",href:"https://ufsc.br"}
];


ReactDOM.render(
    <>
      <BreadCrumb itens={itens} />
      <BreadCrumb itens={itens} definition="is-centered"/>
      <BreadCrumb itens={itens} definition="is-right"/>
      <BreadCrumb itens={itens_with_icons} />
      <BreadCrumb definition="has-arrow-separator" itens={itens} />
      <BreadCrumb definition="has-bullet-separator" itens={itens} />
      <BreadCrumb definition="has-dot-separator" itens={itens} />
      <BreadCrumb definition="has-succeeds-separator" itens={itens} />
      <BreadCrumb itens={itens_with_href} />
      <BreadCrumb itens={itens_with_onClick}/>
    </>
  ,document.getElementById('root')
)

/*
--------- WIKI ------------- 

import React from 'react';
import ReactDOM from 'react-dom';
import BreadCrumb from './components/BreadCrumb.jsx';
import Icon from './components/Icon';
import 'bulma/css/bulma.css'


const onClickItem = () => {
  alert("Clicked");
}

const itens = [
  { value: "Bulma" },
  { value: "Documentation" },
  { value: "Componentes" },
  { value: "BreadCrumb" }
];

const itens_with_icons = [
{ value: <Icon icon_name="fas fa-home">Bulma</Icon> },
{ value: <Icon icon_name="fas fa-book">Documentation</Icon> },
{ value: <Icon icon_name="fas fa-puzzle-piece">Componentes</Icon> },
{ value: <Icon icon_name="fas fa-thumbs-up">BreadCrumb</Icon> }];

const itens_with_onClick = [
  { value: "Bulma", onClick: onClickItem },
  { value: "Documentation", onClick: onClickItem },
  { value: "Componentes", onClick: onClickItem },
  { value: "BreadCrumb", onClick: onClickItem }
];

const itens_with_href =[
  {value:"Bulma",href:"https://ufsc.br"},
  {value:"Documentation",href:"https://ufsc.br"},
  {value:"Componentes",href:"https://ufsc.br"}, 
  { value:"BreadCrumb",href:"https://ufsc.br"}
];


ReactDOM.render(
    <>
      <BreadCrumb itens={itens} />
      <BreadCrumb itens={itens} definition="is-centered"/>
      <BreadCrumb itens={itens} definition="is-right"/>
      <BreadCrumb itens={itens_with_icons} />
      <BreadCrumb definition="has-arrow-separator" itens={itens} />
      <BreadCrumb definition="has-bullet-separator" itens={itens} />
      <BreadCrumb definition="has-dot-separator" itens={itens} />
      <BreadCrumb definition="has-succeeds-separator" itens={itens} />
      <BreadCrumb itens={itens_with_href} />
      <BreadCrumb itens={itens_with_onClick}/>
    </>
  ,document.getElementById('root')
)

*/