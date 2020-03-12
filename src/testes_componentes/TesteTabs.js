import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import Tabs from './biblioteca/components/Tabs'

var itens = [{value:"kkk",definition :"active"},
             {value: "Musica"},
             {value: "Videos"},
             {value: "Documents"}
            ];

ReactDOM.render( 
  <>
   <Tabs itens={itens}/>
   <Tabs itens={itens} definition="center"/>
   <Tabs itens={itens} definition="right"/>
   <Tabs itens={itens} definition ="small"/>
   <Tabs itens={itens} definition="center small"/>
   <Tabs itens={itens} definition="right small"/>
   <Tabs itens={itens} definition ="medium"/>
   <Tabs itens={itens} definition="center medium"/>
   <Tabs itens={itens} definition="right medium"/>
   <Tabs itens={itens} definition ="large"/>
   <Tabs itens={itens} definition="center large"/>
   <Tabs itens={itens} definition="right large"/>
   <Tabs itens={itens} definition="center large boxed"/>
   <Tabs itens={itens} definition="center large toggle"/>
   <Tabs itens={itens} definition="center large toggle toggle-rounded fullwidth"/>
   <Tabs itens={itens} definition="center boxed"/>
   <Tabs itens={itens} definition="fullwidth toggle"/>



  </>
   
   ,
document.getElementById('root'));