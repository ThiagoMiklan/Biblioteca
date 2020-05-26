import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import NavigationBar from './biblioteca/NavigationBar';
import HeroThreeParts from './biblioteca/HeroThreeParts';
import Title from './biblioteca/Title';
import Subtitle from './biblioteca/Subtitle';
import Tabs from './biblioteca/Tabs';
import 'bulma/css/bulma.css';

var itens_navbar_start = [
    {value:"Administration"},
    {value:"General"},
    {value:"About"}
]

var itens_navbar_end = [
    {value:"Administration"},
    {value:"General"},
    {value:"About"}
]

var itens_tabs = [
    {value:"Clients"},
    {value:"Users"},
    {value:"Requires"}
]

ReactDOM.render(<HeroThreeParts definition="is-fullheight">
    <NavigationBar itens_start={itens_navbar_start} itens_end={itens_navbar_end} />
    <div className="container has-text-centered">
        <Title definition={1}>Title</Title>
        <Subtitle definition={2}>Subtitle</Subtitle>
    </div>
    <Tabs itens={itens_tabs}></Tabs>
</HeroThreeParts>, document.getElementById('root'));
