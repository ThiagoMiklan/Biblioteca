import React from 'react';
import Content from '../biblioteca/Content';
import List from '../biblioteca/List';
import renderer from 'react-test-renderer';

var itens =  ["coffee","tea","milk"]; 
test('test list', ()=>{
    const lists = renderer.create(
    <Content>
        <List definition="lower-alpha" itens={itens}></List>
        <List definition = "lower-roman" itens={itens}></List>
        <List definition = "upper-alpha" itens={itens}></List>
        <List definition = "upper-roman" itens={itens}></List>
    </Content>
    ).toJSON();  
    expect(lists).toMatchSnapshot();
});
