import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import './css/all.js';
import List from './biblioteca/elements/List';
import Content from './biblioteca/elements/Content';

var itens =  ["coffee","tea","milk"];

ReactDOM.render(
  <Content>
    <List definition="lower-alpha" itens={itens}></List>
    <List definition = "lower-roman" itens={itens}></List>
    <List definition = "upper-alpha" itens={itens}></List>
    <List definition = "upper-roman" itens={itens}></List>
  </Content>
  ,
  document.getElementById("root"))
