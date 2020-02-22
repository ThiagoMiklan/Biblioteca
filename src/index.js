import React from 'react';
import ReactDOM from 'react-dom';
import './css/bulma.css';
import Title from './biblioteca/elements/Title';
import {renderToString} from 'react-dom/server';

var x = <>
<Title definition="1" value="Título 1"/>
<Title definition="2" value="Título 2"/>
<Title definition="3" value="Título 3"/>
<Title definition="4" value="Título 4"/>
<Title definition="5" value="Título 5"/>
<Title definition="6" value="Título 6"/>
</>;
var z = renderToString(x);

var y = 0;
ReactDOM.render( 
    x
,
document.getElementById('root')
);
