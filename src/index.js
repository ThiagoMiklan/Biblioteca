
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Column from './components/Column';
import Columns from './components/Columns';
import Content from './components/Content';
import Pagination from './components/Pagination';
import CheckBox from './components/CheckBox';
import Button from './components/Button';
import Panel from './components/Panel';
import Select from './components/Select';
import Control from './components/Control';
import NavigationBar from './components/NavigationBar';
import Title from './components/Title';
import Subtitle from './components/SubTitle';
import Tabs from './components/Tabs';
import Hero from './components/Hero';
import HeroThreeParts from './components/HeroThreeParts';
import Icon from './components/Icon';
import '../tests/icons/all.js';
import 'bulma/css/bulma.css';
 
var itens_navbar_end = [
    { value: "Home", definition: "active" },
    { value: "Examples" },
    { value: "Documentation" },
    { value: <Button definition="is-primary is-inverted" label={<Icon icon_name="fab fa-github">Github</Icon>}/> }]

var itens_tabs = [{ value: "Overview", definition: "active" }, { value: "Modifiers" }, { value: "Grid" }, { value: "Elements" }, { value: "Components" }, { value: "Layout" }]



ReactDOM.render(
    <>
        <HeroThreeParts definition="is-medium is-primary">
        <NavigationBar src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
        <div className="container has-text-centered">
            <Title definition={1}>Title</Title>
            <Subtitle definition={2}>Subtitle</Subtitle>
        </div>
        <Tabs definition="is-boxed is-fullwidth" itens={itens_tabs}></Tabs>
    </HeroThreeParts>

    <HeroThreeParts definition="is-fullheight is-info">
        <NavigationBar src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
        <div className="container has-text-centered">
            <Title definition={1}>Title</Title>
            <Subtitle definition={2}>Subtitle</Subtitle>
        </div>
        <Tabs definition="is-boxed is-fullwidth" itens={itens_tabs}></Tabs>
    </HeroThreeParts>

    <HeroThreeParts definition="is-fullheight is-success">
        <NavigationBar src_brand="https://bulma.io/images/bulma-type-white.png" alt_brand="logo" itens_end={itens_navbar_end} />
        <div className="container has-text-centered">
            <Title definition={1}>Title</Title>
            <Subtitle definition={2}>Subtitle</Subtitle>
        </div>
        <Tabs definition="is-boxed is-fullwidth" itens={itens_tabs}></Tabs>
    </HeroThreeParts>

    </>
  , document.getElementById("root"))
