import React from 'react';
import NavigationBar from '../biblioteca/NavigationBar';
import HeroThreeParts from '../biblioteca/HeroThreeParts';
import Title from '../biblioteca/Title';
import Subtitle from '../biblioteca/Subtitle';
import Tabs from '../biblioteca/Tabs';
import Button from '../biblioteca/Button';
import Icon from '../biblioteca/Icon';
import renderer from 'react-test-renderer';
import { render } from 'react-dom';


var itens_navbar_end = [
    {value: "Home", definition:"active"},
    {value: "Examples"},
    {value: "Documentation"},
    { value: <Button definition="primary inverted"><Icon icon_name="fab fa-github">Github</Icon></Button> }]
  
  var itens_tabs = [{value: "Overview",definition:"active"},{ value: "Modifiers" }, { value: "Grid" }, { value: "Elements" },{ value: "Components" }, { value: "Layout" }]
  

test('hero three parts medium primary', () => {
    const component = renderer.create(<HeroThreeParts definition="medium primary">
        <NavigationBar src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
        <div className="container has-text-centered">
            <Title definition={1}>Title</Title>
            <Subtitle definition={2}>Subtitle</Subtitle>
        </div>
        <Tabs definition="boxed fullwidth" itens={itens_tabs}></Tabs>
    </HeroThreeParts>).toJSON();

    expect(component).toMatchSnapshot();
})

test('hero three parts fullheight success', () => {
    const component = renderer.create(<HeroThreeParts definition="fullheight info">
    <NavigationBar  src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
    <div className="container has-text-centered">
        <Title definition={1}>Title</Title>
        <Subtitle definition={2}>Subtitle</Subtitle>
    </div>
    <Tabs definition="boxed fullwidth" itens={itens_tabs}></Tabs>
  </HeroThreeParts>).toJSON();

    expect(component).toMatchSnapshot();
})

test('hero three parts fullheight success', () => {
    const component = renderer.create( <HeroThreeParts definition="fullheight success">
    <NavigationBar  src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
    <div className="container has-text-centered">
        <Title definition={1}>Title</Title>
        <Subtitle definition={2}>Subtitle</Subtitle>
    </div>
    <Tabs definition="boxed fullwidth" itens={itens_tabs}></Tabs>
  </HeroThreeParts>
  ).toJSON();

    expect(component).toMatchSnapshot();
})

    
    
  
 
   
    
  
