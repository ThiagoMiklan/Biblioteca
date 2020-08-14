import React from 'react';
import Content from '../../src/components/Content';
import List from '../../src/components/List';
import renderer from 'react-test-renderer';

var itens = [{value:"Thiago",onClick:()=>{alert("Clicou")}}
            ,{value:"João",onClick:()=>{alert("Clicou")}},
             {value:"Mathias",onClick:()=>{alert("Clicou")}}]
             
test('test list', ()=>{
    const lists = renderer.create(
        <Content>
        <List definition="is-lower-alpha" itens={itens}></List>
        <List definition = "is-lower-roman" itens={itens}></List>
        <List definition = "is-upper-alpha" itens={itens}></List>
        <List definition = "is-upper-roman" itens={itens}></List>
    </Content>
    ).toJSON();  
    expect(lists).toMatchSnapshot();
});
