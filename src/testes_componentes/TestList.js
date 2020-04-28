import 'bulma/css/bulma.css'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Content from './biblioteca/Content';
import List from './biblioteca/List';
 

var itens = [{value:"Item 1",onClick:()=>{alert("Clicked")}}
            ,{value:"Item 2",onClick:()=>{alert("Clicked")}},
             {value:"Item 3",onClick:()=>{alert("Clicked")}}]

ReactDOM.render(
    <>
    <Content>
    <List definition="lower-alpha" itens={itens}></List>
    <List definition = "lower-roman" itens={itens}></List>
    <List definition = "upper-alpha" itens={itens}></List>
    <List definition = "upper-roman" itens={itens}></List>
    </Content>
    </>
  , document.getElementById("root"))
