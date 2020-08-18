//@flow
import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import NavigationBar from './components/NavigationBar';
import HeroThreeParts from './components/HeroThreeParts';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Tabs from './components/Tabs';
import Container from './components/Container';
import '../tests/css/bulma.css';

const itens_navbar_start = [
    {value:"Administration"},
    {value:"General"},
    {value:"About"}
]

const itens_navbar_end = [
    {value:"Administration"},
    {value:"General"},
    {value:"About"}
]

const itens_tabs = [
    {value:"Clients"},
    {value:"Users"},
    {value:"Requires"}
]

ReactDOM.render(<HeroThreeParts definition="is-fullheight">
    <NavigationBar itens_start={itens_navbar_start} itens_end={itens_navbar_end} />
    <Container definition="has-text-centered">
        <Title definition={1}>Title</Title>
        <Subtitle definition={2}>Subtitle</Subtitle>
    </Container>
    <Tabs itens={itens_tabs}></Tabs>
</HeroThreeParts>, document.getElementById('root'));
