import React, { useState } from 'react';
import ReactDOM from 'react-dom';
 
import Hero from './biblioteca/Hero';
import Button from './biblioteca/Button';
import NavigationBar from './biblioteca/NavigationBar';
import HeroThreeParts from './biblioteca/HeroThreeParts';
import Title from './biblioteca/Title';
import Subtitle from './biblioteca/Subtitle';
import Tabs from './biblioteca/Tabs';

var itens_navbar_start = [{ value: "Home" }, { value: "Documentation" }]
var itens_navbar_end = [{ value: <Button definition="dark">Github</Button> },{ value: <Button definition="link">Download</Button> }]
var itens_tabs = [{ value: "Modifiers" }, { value: "Grid" }, { value: "Elements" },{ value: "Components" }, { value: "Layout" }]

ReactDOM.render(
  <>
    <Hero title="Hero Title" subtitle="Hero Subtitle" />
    <Hero definition="primary" title="Primary Title" subtitle="Primary Subtitle" />
    <Hero definition="info" title="Info Title" subtitle="Info Subtitle" />
    <Hero definition="success" title="Success Title" subtitle="Success Subtitle" />
    <Hero definition="warning" title="Warning Title" subtitle="Warning Subtitle" />
    <Hero definition="danger" title="Danger Title" subtitle="Danger Subtitle" />
    <Hero definition="light" title="Light Title" subtitle="Light Subtitle" />
    <Hero definition="dark" title="Dark Title" subtitle="Dark Subtitle" />

    <Hero definition="primary bold" title="Primary Title" subtitle="Primary Subtitle" />
    <Hero definition="info bold" title="Info Title" subtitle="Info Subtitle" />
    <Hero definition="success bold" title="Success Title" subtitle="Success Subtitle" />
    <Hero definition="warning bold" title="Warning Title" subtitle="Warning Subtitle" />
    <Hero definition="danger bold" title="Danger Title" subtitle="Danger Subtitle" />
    <Hero definition="light bold" title="Light Title" subtitle="Light Subtitle" />
    <Hero definition="dark bold" title="Dark Title" subtitle="Dark Subtitle" />

    <Hero definition="primary medium" title="Primary Title" subtitle="Primary Subtitle" />
    <Hero definition="info large" title="Info Title" subtitle="Info Subtitle" />
    <Hero definition="success large" title="Success Title" subtitle="Success Subtitle" />
    
    <NavigationBar itens_start={itens_navbar_start} itens_end={itens_navbar_end} />
      <Hero definition="info with-navbar" title="With navbar" />
    
    <HeroThreeParts definition="fullheight">
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


