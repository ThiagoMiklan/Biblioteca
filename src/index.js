// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Table from './components/Table';

const elem = document.createElement('div')
document.body.appendChild(elem)

const itens_header = [
  {value:"One"},{value:"Two"}
]

const itens_body =[
  {One:"Three",Two:"Four"},
  {Five:"Five", Six:"Six"},
  {Nine:"Nine", Ten: "Ten"},
  {Eleven:"Eleven", Twelve:"Twelve"}
]

const itens_footer = [
    {value:"One Footer"},{value:"Two Footer"}
]

ReactDOM.render(
    <Table definition="is-bordered" itens_header={itens_header} itens_body={itens_body} itens_footer={itens_footer}/>
    ,elem
);
