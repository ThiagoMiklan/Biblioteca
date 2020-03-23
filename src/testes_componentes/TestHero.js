import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import Hero from './biblioteca/layout/Hero';
import { renderToString } from 'react-dom/server';


ReactDOM.render(
<>

<Hero title="Hero Title" subtitle="Hero Subtitle"/>
<Hero definition="primary" title="Primary Title" subtitle="Primary Subtitle"/>
<Hero definition="info" title="Info Title" subtitle="Info Subtitle"/>
<Hero definition="success" title="Success Title" subtitle="Success Subtitle"/>
<Hero definition="warning" title="Warning Title" subtitle="Warning Subtitle"/>
<Hero definition="danger" title="Danger Title" subtitle="Danger Subtitle"/>
<Hero definition="light" title="Light Title" subtitle="Light Subtitle"/>
<Hero definition="dark" title="Dark Title" subtitle="Dark Subtitle"/>

<Hero definition="primary bold" title="Primary Title" subtitle="Primary Subtitle"/>
<Hero definition="info bold" title="Info Title" subtitle="Info Subtitle"/>
<Hero definition="success bold" title="Success Title" subtitle="Success Subtitle"/>
<Hero definition="warning bold" title="Warning Title" subtitle="Warning Subtitle"/>
<Hero definition="danger bold" title="Danger Title" subtitle="Danger Subtitle"/>
<Hero definition="light bold" title="Light Title" subtitle="Light Subtitle"/>
<Hero definition="dark bold" title="Dark Title" subtitle="Dark Subtitle"/>

<Hero definition="primary medium" title="Primary Title" subtitle="Primary Subtitle"/>
<Hero definition="info large" title="Info Title" subtitle="Info Subtitle"/>
<Hero definition="success large" title="Success Title" subtitle="Success Subtitle"/>




</>

,

document.getElementById("root"))


