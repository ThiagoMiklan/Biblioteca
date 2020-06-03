import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Hero from './components/Hero';
import Button from './components/Button';
import NavigationBar from './components/NavigationBar';
import HeroThreeParts from './components/HeroThreeParts';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Tabs from './components/Tabs';

var itens_navbar_start = [{ value: "Home" }, { value: "Documentation" }]
var itens_navbar_end = [{ value: <Button definition="is-dark">Github</Button> },{ value: <Button definition="is-link">Download</Button> }]
var itens_tabs = [{ value: "Modifiers" }, { value: "Grid" }, { value: "Elements" },{ value: "Components" }, { value: "Layout" }]

ReactDOM.render(
  <>
    <Hero title="Hero Title" subtitle="Hero Subtitle" />
    <Hero definition={"is-primary" }title="Primary Title" subtitle="Primary Subtitle" />
    <Hero definition="is-info" title="Info Title" subtitle="Info Subtitle" />
    <Hero definition="is-success" title="Success Title" subtitle="Success Subtitle" />
    <Hero definition="is-warning" title="Warning Title" subtitle="Warning Subtitle" />
    <Hero definition="is-danger" title="Danger Title" subtitle="Danger Subtitle" />
    <Hero definition="is-light" title="Light Title" subtitle="Light Subtitle" />
    <Hero definition="is-dark" title="Dark Title" subtitle="Dark Subtitle" />

    <Hero definition="is-primary is-bold" title="Primary Title" subtitle="Primary Subtitle" />
    <Hero definition="is-info is-bold" title="Info Title" subtitle="Info Subtitle" />
    <Hero definition="is-success  is-bold" title="Success Title" subtitle="Success Subtitle" />
    <Hero definition="is-warning is-bold" title="Warning Title" subtitle="Warning Subtitle" />
    <Hero definition="is-danger is-bold" title="Danger Title" subtitle="Danger Subtitle" />
    <Hero definition="is-light is-bold" title="Light Title" subtitle="Light Subtitle" />
    <Hero definition="is-dark is-bold" title="Dark Title" subtitle="Dark Subtitle" />

    <Hero definition="is-primary is-medium" title="Primary Title" subtitle="Primary Subtitle" />
    <Hero definition="is-info is-large" title="Info Title" subtitle="Info Subtitle" />
    <Hero definition="is-success is-large" title="Success Title" subtitle="Success Subtitle" />
    
    <NavigationBar itens_start={itens_navbar_start} itens_end={itens_navbar_end} />
      <Hero definition="is-link is-fullheight-with-navbar" title="With navbar" />
    
    <HeroThreeParts definition="is-fullheight">
      <NavigationBar itens_start={itens_navbar_start} itens_end={itens_navbar_end} />
      <div className="container has-text-centered">
        <Title definition={1}>Title</Title>
        <Subtitle definition={2}>Subtitle</Subtitle>
      </div>
      <Tabs itens={itens_tabs}></Tabs>
    </HeroThreeParts>
   
  </>

  ,

  document.getElementById("root"))


