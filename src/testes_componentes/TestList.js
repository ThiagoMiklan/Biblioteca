import React from 'react';
import ReactDOM from 'react-dom';
import Content from './biblioteca/Content';
import List from './biblioteca/List';
 

var itens = [{value:"Thiago",onClick:()=>{alert("Clicou")}}
            ,{value:"João",onClick:()=>{alert("Clicou")}},
             {value:"Mathias",onClick:()=>{alert("Clicou")}}]

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
