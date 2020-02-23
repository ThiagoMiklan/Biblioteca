import React from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import Pagination from './biblioteca/components/Pagination';

var itens = [];
itens.push({value:1, href:"https://pt-br.reactjs.org/docs/hooks-overview.html",definition:"current"});
itens.push({value:2, href:"https://pt-br.reactjs.org/docs/hooks-effect.html",definition:""});
itens.push({value:3, href:"https://pt-br.reactjs.org/docs/hooks-effect.html",definition:""});

ReactDOM.render( 
    <>
    <Pagination  itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="center"itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition ="rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="center rounded"itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    
    <Pagination  definition="small" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="small center"itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="small right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition ="small rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="small center rounded"itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="small right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>

    <Pagination  definition="medium" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="medium center"itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="medium right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition ="medium rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="medium center rounded"itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="medium right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>

    <Pagination  definition="large" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="large center"itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="large right" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition ="large rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="large center rounded"itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
    <Pagination  definition="large right rounded" itens={itens} href_previous="https://pt-br.reactjs.org/docs/hooks-overview.html" href_next="https://pt-br.reactjs.org/docs/hooks-effect.html"next_name="Previous"previous_name="Next"/>
   
    
    
    </>
 ,
document.getElementById('root'));
