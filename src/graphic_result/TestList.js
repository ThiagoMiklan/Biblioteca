import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Content from './components/Content';
import List from './components/List';
 

var itens = [{value:"Item 1",onClick:()=>{alert("Clicked")}}
            ,{value:"Item 2",onClick:()=>{alert("Clicked")}},
             {value:"Item 3",onClick:()=>{alert("Clicked")}}]

ReactDOM.render(
    <>
    <Content>
    <List definition="is-lower-alpha" itens={itens}></List>
    <List definition = "is-lower-roman" itens={itens}></List>
    <List definition = "is-upper-alpha" itens={itens}></List>
    <List definition = "is-upper-roman" itens={itens}></List>
    </Content>
    </>
  , document.getElementById("root"))
