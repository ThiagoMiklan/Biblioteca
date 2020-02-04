import React from 'react';
import ReactDOM from 'react-dom';
import Button from './biblioteca/Button.jsx';
import './css/bulma.css';

function onClick(){
    alert("clicou");
}

ReactDOM.render(
    <Button value="Teste" definition="button primary" onClick={onClick}/>,
   document.getElementById('root')
  );
