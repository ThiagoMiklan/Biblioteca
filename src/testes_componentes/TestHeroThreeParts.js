import React, { useState } from 'react';
import './css/bulma.css';
import NavigationBar from './biblioteca/NavigationBar';
import HeroThreeParts from './biblioteca/HeroThreeParts';
import Title from './biblioteca/Title';
import Subtitle from './biblioteca/Subtitle';
import Tabs from './biblioteca/Tabs';

ReactDOM.render(<HeroThreeParts definition="fullheight">
    <NavigationBar itens_start={itens_navbar_start} itens_end={itens_navbar_end} />
    <div className="container has-text-centered">
        <Title definition={1}>Title</Title>
        <Subtitle definition={2}>Subtitle</Subtitle>
    </div>
    <Tabs itens={itens_tabs}></Tabs>
</HeroThreeParts>, document.getElementById('root'));
