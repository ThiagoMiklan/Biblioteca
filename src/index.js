
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css'
 
import Tabs from './biblioteca/Tabs'

var itens = [{value:"Home",definition :"active"},
             {value: "Musica"},
             {value: "Videos"},
             {value: "Documentos"}
            ];

ReactDOM.render(
<div className="columns is-centered">
  <div className="column is-half">
    <Tabs definition="large" itens={itens}/>
  </div>
</div>
,document.getElementById('root'));


