import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Tabs from './biblioteca/Tabs'
import Column from './biblioteca/Column';
import Columns from './biblioteca/Columns';
import Icon from './biblioteca/Icon';

var itens = [{ value: "Pictures", definition: "active"},
{ value: "Musica" },
{ value: "Videos" },
{ value: "Documents" }
];


var itens_icons = [{ value: "Pictures", definition: "active",icon_name:"fas fa-image"},
{ value: "Musica", icon_name: "fas fa-music" },
{ value: "Videos", icon_name: "fas fa-film" },
{ value: "Documents", icon_name: "far fa-file-alt" }
];

var itens_full = [
{ value: "Left", icon_name: "fas fa-angle-left" },
{ value: "Up", icon_name: "fas fa-angle-up"},
{ value: "Right", icon_name: "fas fa-angle-right" }
];
ReactDOM.render(
    <Columns>
        <Column >
            <div className="container is-fluid">
                <Tabs itens={itens} />
                <Tabs itens={itens} definition="centered" />
                <Tabs itens={itens} definition="right" />
               
                <Tabs itens={itens_icons} />

                <Tabs itens={itens} definition="small" />
                <Tabs itens={itens} definition="medium" />
                <Tabs itens={itens} definition="large" />
                
                <Tabs itens={itens_icons} definition="boxed" />
                <Tabs itens={itens_icons} definition="toggle" />
                <Tabs itens={itens_icons} definition="toggle toggle-rounded" />

                <Tabs itens={itens_full} definition="fullwidth" />

                <Tabs itens={itens_icons} definition="centered boxed"/>
                <Tabs itens={itens_icons} definition="toggle fullwidth"/>
                <Tabs itens={itens_icons} definition="centered boxed medium"/>
                <Tabs itens={itens_icons} definition="toggle fullwidth large"/>

            </div>
        </Column>
    </Columns>

    ,
    document.getElementById('root'));


/*
<Columns>
        <Column definition="half">
            <div className="container is-fluid">
                <Tabs itens={itens} />
                <Tabs itens={itens} definition="center" />
                <Tabs itens={itens} definition="right" />
                <Tabs itens={itens} definition="small" />
                <Tabs itens={itens} definition="center small" />
                <Tabs itens={itens} definition="right small" />
                <Tabs itens={itens} definition="medium" />
                <Tabs itens={itens} definition="center medium" />
                <Tabs itens={itens} definition="right medium" />
                <Tabs itens={itens} definition="large" />
                <Tabs itens={itens} definition="center large" />
                <Tabs itens={itens} definition="right large" />
                <Tabs itens={itens} definition="center large boxed" />
                <Tabs itens={itens} definition="center large toggle" />
                <Tabs itens={itens} definition="center large toggle toggle-rounded fullwidth" />
                <Tabs itens={itens} definition="center boxed" />
                <Tabs itens={itens} definition="fullwidth toggle" />
            </div>
        </Column>
    </Columns>

*/